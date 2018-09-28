# Hx-Doc

Documents for HyperExchange project.

## Installation
hxdocs is built with MkDocs. In order to install MkDocs you will need Python installed on your system, as well as the Python package manager, pip. You can check if you have these already installed from the command line:

```
$ python --version
Python 2.7.6
$ pip --version
pip 8.1.1
```

MkDocs supports Python versions 2.6, 2.7, 3.3, 3.4 and 3.5.

On Windows it is recommended that you install Python and pip with [Chocolatey](https://chocolatey.org/).

Install the mkdocs package, mkdocs-bootswatch themes, and fontawesome packages using pip:

`$ pip install --user -r requirements.txt`

Getting startedGetting started is super easy.

`$ cd hxdocs`

There is a single configuration file named mkdocs.yml, and a folder named docs that will contain the documentation source files. MkDocs comes with a built-in dev-server that lets you preview the documentation as you work on it. Make sure you are in the same directory as the mkdocs.yml configuration file, and then start the server by running the mkdocs serve command:

```
$ mkdocs serve
INFO    -  Building documentation...
INFO    -  Cleaning site directory
[I 160402 15:50:43 server:271] Serving on http://127.0.0.1:8000
[I 160402 15:50:43 handlers:58] Start watching changes
[I 160402 15:50:43 handlers:60] Start detecting changes
```

Open up http://127.0.0.1:8000 in your browser, and you will see the default home page being displayed. The dev-server also supports auto-reloading, and will rebuild your documentation whenever anything in the configuration file, documentation directory, or theme directory changes.
