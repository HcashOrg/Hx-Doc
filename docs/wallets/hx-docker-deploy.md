# hx docker environment deploy

## overview

Because the server usually uses the linux server, the following ubuntu16.04 server environment serves only as an example about how to compile the docker deployment image of the hx project and start the corresponding container.

## Download all resources needed for deployment

1.Download the deployment file deploy_data.zip from official website <http://www.hx.cash/> and extract it to the local path. Directory structure as follows:

![docker deploy](/img/wallets/docker/docker.png)

2.Directory structure discription:

* Main_chain directory: This directory includes the contents of the hx main chain and the startup script;
* third_chain directory: This directory includes the content of the third-party chain accessed by hx and the startup script;
* volumes directory: This directory is mainly used to map the relevant chain data and log in the hx after startup to outside;
* docker-compose.yml file: used to organize and configure two docker serveice hx-mainchain and hx-thirdchain in hx;
* Dockerfile_mainchain and Dockerfile_thirdchain files: define docker files for hx_mainchain and hx_thirdchain;
* sources.list file: A configuration file in Ubuntu system for configuring ubuntu sources.


## Configuration file details

1.Dockerfile_mainchain

(1) For domestic users, the resources.list has been modified in docker in order to faster and better related software installation;

![docker deploy](/img/wallets/docker/docker1.png)

(2)Configure required content of hx_mainchain;

![docker deploy](/img/wallets/docker/docker2.png)

* Create a /hx/crosschain_midware directory in the docker image to store middleware related data;

* Copy needed source of hx_mainchain from directory main_chain to docker image;

* Give start.sh (the script executed after docker starts) and duration_node (the node of mainchain) execute permission;

* Link the witness_node to /usr/bin for the start.sh script to use.

(2)Configure hx_mainchain to start the execution script.

![docker deploy](/img/wallets/docker/docker3.png)

(3)Hx_mainchain execution script, located under the main_chain directory

![docker deploy](/img/wallets/docker/docker4.png)

2.Dockerfile_thirdchain

Its structure is similar to the above Dockerfile_mainchain, which will not be described repeatly here;


3.Docker-compose.yml

(1) Two services (images) are defined in docker-compose, namely hx_thirdchain and hx_mainchain;

![docker deploy](/img/wallets/docker/docker5.png)

(2)Service：hx_thirdchain

* Dockerfile_thirdchain in the current directory as its docker file;

![docker deploy](/img/wallets/docker/docker6.png)

* Define the name and tag of the service (image)

![docker deploy](/img/wallets/docker/docker7.png)

* Setup port map of thirdchain,These ports correspond to the ports of the relevant chains in the execution script.

![docker deploy](/img/wallets/docker/docker8.png)

Execute port status in script start.sh

![docker deploy](/img/wallets/docker/docker9.png)

* Set mapped directory

![docker deploy](/img/wallets/docker/docker10.png)

* Set up name of the docker after the service starts.

![docker deploy](/img/wallets/docker/docker11.png)

* Set ipv4 address of the service

![docker deploy](/img/wallets/docker/docker12.png)

(3)Service：hx_mainchain

Similar to the above hx_thirdchain service

* Set the dependency of the service, hx_mainchain service depends on hx_thirdchain service

![docker deploy](/img/wallets/docker/docker13.png)

* Set ipv4 address of the service

![docker deploy](/img/wallets/docker/docker14.png)

4.Execute the script (start.sh)

(1)Execution script in main_chain

![docker deploy](/img/wallets/docker/docker15.png)

* Start the mongo db required to collect the plugin
* Start acquisition plugin
* Start the witness_node node of mainchain

(2)Execution script in third_chain

![docker deploy](/img/wallets/docker/docker16.png)

* start bitcoin node
* start hc node
* start litecoin node

## Compile the image

Go to deploy_data directory and execute the following command:

    sudo docker-compose build [hx_mainchain/hx_thirdchain]

Description：
* [hx_mainchain/hx_thirdchain] is an optional parameter indicating which image should be compiled (service). If it is empty, all images need to be compiled.
* There are two images in docker compose, hx_mainchain and hx_thirdchain, where hx_mainchain depends on hx_thirdchain. So you can also compile a separate image. 

## Starting the container

Execute the following command in the deploy_data directory:
	
    sudo docker-compose up –d  [hx_mainchain/hx_thirdchain]
	
Description:
* [hx_mainchain/hx_thirdchain] is an optional parameter indicating which mirror can be used as base to start container. If it is empty, start all containers.
* Because hx_mainchain depends on hx_thirdchain, you must first start hx_thirdchain to synchronize the data on the third-party chain. After a period of time (preferably after data synchronization), start hx_mainchain, and the collection program inside start to collect relevant data.

## Confirm container status

Use cli_wallet under deploy_data directory (if it does not have execute permission, add the corresponding execute permission), connect to hx chain to check its status.
	
    ./cli_wallet -s ws://192.168.18.8:8090
	
Note: The description of above mentioned ip and port of the above command is detailed in the description of the above configuration file.







