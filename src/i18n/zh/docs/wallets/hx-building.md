# HyperExchange项目编译指导


## 编译

**HX-Node** 需要64位操作系统来构建；

**HX-Node** 需要Boost版本1.64.0或更新版本。不支持早于1.64的版本。

* [Ubuntu (64-bit) Linux](hx-building/#1)
* [OS X](hx-building/#2)
* [Windows](hx-building/#3)

---

<h2 id="1">UBUNTU下编译</h2>

---

> **Ubuntu 16.04 LTS (64-bit) 构建和安装说明**

---

在Ubuntu 16.04 LTS（64位）上进行全新安装需要以下依赖项：

    sudo apt-get update
    sudo apt-get install autoconf cmake make automake libtool git libboost-all-dev libssl-dev g++ libcurl4-openssl-dev

> **构建 Crosschain Privatekey项目**

    git clone https://github.com/BlockLink/blocklink_crosschain_privatekey
    cd blocklink_crosschain_privatekey
    cmake -DCMAKE_BUILD_TYPE=Release .
    make

> **构建 Eth Crosschain Privatekey项目**

    git clone https://github.com/BlockLink/eth_crosschain_privatekey.git
    cd eth_crosschain_privatekey/eth_sign/cryptopp/
    make
    cd ..
    cmake .
    make


> **构建 HyperExchange Node项目**

将crosschain privatekey项目和Eth Crosschain Privatekey项目生成的lib库路径添加到环境变量里，请使用您环境中blocklink_crosschain_privatekey和eth_crosschain_privatekey的路径替换下面命令中的路径。

    `export CROSSCHAIN_PRIVATEKEY_PROJECT=~/blocklink_crosschain_privatekey`
    `export ETH_CROSSCHAIN_PROJECT=~/eth_crosschain_privatekey`


    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange
    git submodule update --init --recursive
    cmake .
    make

---

<h2 id="2">MAC OS下编译</h2>

> **HyperExchange Node MAC系统下构建说明**

1.按照以下说明安装XCode及其命令行工具:<https://guide.macports.org/#installing.xcode>。在OS X 10.11（El Capitan）及更新版本中，当在终端中运行devloper命令时，系统将提示您安装开发人员工具。可能不需要此步骤。

2.按照以下说明安装软件: <http://brew.sh/>

3.初始化Homebrew:

    brew doctor
    brew update

4.安装依赖项：

    brew install boost cmake git openssl autoconf automake libtool
    brew link --force openssl 

5.可选。要支持导入比特币钱包文件：

    brew install berkeley-db

6.可选。在LevelDB中使用TCMalloc：

    brew install google-perftools

7.构建 Crosschain Privatekey项目

    git clone https://github.com/BlockLink/blocklink_crosschain_privatekey
    cd blocklink_crosschain_privatekey
    cmake .
    make

8.构建 Eth Crosschain Privatekey项目

    git clone https://github.com/BlockLink/eth_crosschain_privatekey.git
    cd eth_crosschain_privatekey/eth_sign/cryptopp/
    make
    cd ..
    cmake .
    make

9.下载HyperExchange源码:

    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange

10.编译HyperExchange:

将crosschain privatekey项目和Eth Crosschain Privatekey项目生成的lib库路径添加到环境变量里，请使用您环境中blocklink_crosschain_privatekey和eth_crosschain_privatekey的路径替换下面命令中的路径。

    `export CROSSCHAIN_PRIVATEKEY_PROJECT=~/blocklink_crosschain_privatekey`
    `export ETH_CROSSCHAIN_PROJECT=~/eth_crosschain_privatekey`

    git submodule update --init --recursive
    cmake .
    make

注意：如其他地方所述，HyperExchange依赖于第三方库“Boost”和“OpenSSL”。这些库需要处于某些版本范围内。目前，Boost需要比它高1.64或更新。OpenSSL需要在1.0.x范围内。

Boost: 你可以用brew检查当前的boost版本:

    brew search boost
安装其他的boost版本(比如1.64.0):

    brew install boost@1.64
OpenSSL: 您可能拥有比所需版本更旧的OpenSSL版本。如果是这样，使用brew进行升级:

    brew upgrade openssl
使用这些新版本进行编译：我们现在必须告诉cmake这些库的位置。而不是上面提到的“cmake。”，用以下命令：

    cmake -DBOOST_ROOT=/usr/local/opt/boost@1.64 -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl .
然后进行编译

    make

---

<h2 id="3"> Visual Studio 2017下构建</h2>

> 前提条件

* Microsoft Visual C ++ 2017 Update 1（免费的Express版本可以使用）
* 如果您有多个MSVS安装，请使用目标版本的MSVS Developer控制台。
* 此版本适用于64位二进制文​​件。

> 设置目录结构

1.为所有项目创建一个基本目录。我把所有东西放在D：\ hyperexchange中，你可以使用你喜欢的任何路径。在几个bat文件和makefile中，此目录将被称为GRA_ROOT：


    mkdir D:\hyperexchange

2.下载hyperexchange源码

    D:
    cd D:\hyperexchange
    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange
    git submodule update --init --recursive

3.下载CMake

在下面的网站下载cmake的最新版本[http://cmake.org/cmake/resources/software.html](https://cmake.org/download/) (例如 3.12.2). 将其解压缩到您的基本目录，这将创建一个类似于的目录 `D:\hyperexchange\cmake-3.12.2-win64-x64`. 将此目录重命名为 `D:\hyperexchange\CMake`.

如果您已经在系统的其他地方安装了CMake，则可以使用它，但是hyperexchange Core有一些bat文件，希望它位于基本目录的CMake子目录中，因此这些脚本需要调整。

4.Boost

hyperexchange依赖于boost1.64.0或者更新的版本。您可以从源代码构建它们。

- 下载boost源码 [http://www.boost.org/users/download/](http://www.boost.org/users/download/)

- 解压到基本目录里 `D:\hyperexchange`.

- 将产生一个像`D:\hyperexchange\boost_1_64_0`的目录.

5.OpenSSL

HyperExchange依赖OpenSSL版本1.0.2，您必须从源代码构建它。

- 从 [http://www.openssl.org/source/](http://www.openssl.org/source/)下载openssl源码
- 解压缩到基目录 `D:\hyperexchange`
- 这将创建一个类似的目录 `D:\hyperexchange\openssl-1.0.2o`.

6.Crosschain Privatekey项目构建

HyperExchange依赖于libboost，您必须从源代码构建它。

- 从<https://github.com/BlockLink/blocklink_crosschain_privatekey>下载Crosschain Privatekey源码
- 解压缩到基目录 `D:\hyperexchange`
- 这将创建一个类似的目录 `D:\hyperexchange\blocklink_crosschain_privatekey`.

7.Eth Crosschain Privatekey项目构建

HyperExchange依赖于libboost，您必须从源代码构建它。

- 从<https://github.com/BlockLink/eth_crosschain_privatekey.git>下载Eth Crosschain Privatekey源码
- 解压缩到基目录 `D:\hyperexchange`，将leveldb.rar也解压到基目录 `D:\hyperexchange`
- 这将创建一个类似的目录 `D:\hyperexchange\eth_crosschain_privatekey`和`D:\hyperexchange\leveldb`.

最后，您的基本目录应如下所示（64位版本的目录名称略有不同）：

    D:\hyperexchange
    +- HyperExchange
    +- boost_1_64_0
    +- CMake
    +- openssl-1.0.2o
    +- blocklink_crosschain_privatekey
    +- eth_crosschain_privatekey
    +- leveldb


> 构建依赖库项

1.编译 OpenSSL DLLs

    D:
    cd D:\hyperexchange\openssl-1.0.2o
    perl Configure VC-WIN64A --prefix=D:\hyperexchange\OpenSSL
    ms\do_win64a
    nmake -f ms\ntdll.mak
    nmake -f ms\ntdll.mak install

如果在执行命令 `nmake -f ms\ntdll.mak`时发生如"NMAKE : fatal error U1077"，请使用 `VS2013 x64 native tool command prompt`工具执行该命令。

2.编译Boost

    D:
    cd D:\hyperexchange\boost_1_64_0
    bootstrap.bat
    .\b2.exe address-model=64

3.构建Crosschain Privatekey

设置环境编译：

    D:
    cd D:\hyperexchange\blocklink_crosschain_privatekey
    notepad setenv_x64.bat

在打开的notepad输入以下内容，保存并退出。

    @echo off
    set GRA_ROOT=d:/hyperexchange
    set OPENSSL_ROOT=%GRA_ROOT%\OpenSSL
    set OPENSSL_ROOT_DIR=%OPENSSL_ROOT%
    set OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\include
    set BOOST_ROOT=%GRA_ROOT%\boost_1_64_0
    set CROSSCHAIN_PRIVATEKEY_PROJECT=%GRA_ROOT%/blocklink_crosschain_privatekey
    
    set PATH=%GRA_ROOT%\CMake\bin;%BOOST_ROOT%\stage\lib;%OPENSSL_ROOT%\lib\;%CROSSCHAIN_PRIVATEKEY_PROJECT%;%PATH%
    
    echo Setting up VS2017 environment...
    call "%VS150COMNTOOLS%\..\..\VC\vcvarsall.bat" x86_amd64

在我的电脑上，VS150COMNTOOLS变量指:"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Auxiliary\Build\"，请在PC上设置文件vcvarsall.bat的正确路径。

注意保持斜杠和反斜杠与示例一致

然后执行下面的bat文件

    setenv_x64.bat

编译
    
    D:
    cd D:\hyperexchange\blocklink_crosschain_privatekey
    notepad run_cmake_x64.bat

在打开的notepad输入以下内容，保存并退出。

    setlocal
    call "d:\hyperexchange\blocklink_crosschain_privatekey\setenv_x64.bat"
    cd %GRA_ROOT%\blocklink_crosschain_privatekey
    cmake-gui -G "Visual Studio 15"

然后执行下面的bat文件

    run_cmake_x64.bat

这会弹出cmake gui，但是如果你之前使用过CMake可能会显示错误的数据，那么修复：

- Where is the source code: `D:/hyperexchange/blocklink_crosschain_privatekey`
- Where to build the binaries: `D:/hyperexchange/blocklink_crosschain_privatekey/x64`
    
然后点击Configure.它可能会要求您为此项目指定生成器; 如果是，请选择Visual Studio 15 2017 Win64进行64位构建，然后选择Use default native compilers。查看输出并修复任何错误。然后点击Generate。

启动Visual Studio并加载 D:\hyperexchange\blocklink_crosschain_privatekey\x64\blocklink_crosschain_privatekey.sln

将Active Configuration设置为 `RelWithDebInfo`, 确保Active Solution platform 是 `x64` 。

生成解决方案

编译成功后，选择编译`INSTALL` ，在blocklink_crosschain_privatekey下将会生成目录 `third_libs`，里面有 `blocklink_libbitcoin.lib` 和 `blocklink_libbitcoin_secp256k1.lib`。

4.构建Eth Crosschain Privatekey

编译cryptlib.lib
    
    D:
    cd D:\hyperexchange\eth_crosschain_privatekey\eth_sign\cryptopp
    找到cryptest.sln文件并双击，会在vs2017中打开该工程；
    解决方案配置选择“Release”，解决方案平台选择“X64”；
    选择项目cryptlib项目，右键点击生成；
    将D:\hyperexchange\eth_crosschain_privatekey\eth_sign\cryptopp\x64\Output\Release下生成的cryptlib.lib拷贝到D:\hyperexchange\eth_crosschain_privatekey\libs，如果没有libs路径请创建该路径。

设置环境变量：

    D:
    cd D:\hyperexchange\eth_crosschain_privatekey\eth_sign
    notepad setenv_x64.bat

在打开的notepad输入以下内容，保存并退出。

    @echo off
    set GRA_ROOT=d:/hyperexchange
    set OPENSSL_ROOT=%GRA_ROOT%\OpenSSL
    set OPENSSL_ROOT_DIR=%OPENSSL_ROOT%
    set OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\include
    set BOOST_ROOT=%GRA_ROOT%\boost_1_64_0
    set ETH_CROSSCHAIN_PROJECT=%GRA_ROOT%/eth_crosschain_privatekey/eth_sign
    
    set PATH=%GRA_ROOT%\CMake\bin;%BOOST_ROOT%\stage\lib;%OPENSSL_ROOT%\lib\;%ETH_CROSSCHAIN_PROJECT%;%PATH%
    
    echo Setting up VS2017 environment...
    call "%VS150COMNTOOLS%\..\..\VC\vcvarsall.bat" x86_amd64

在我的电脑上，VS150COMNTOOLS变量指:"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Auxiliary\Build\"，请在PC上设置文件vcvarsall.bat的正确路径。

注意保持斜杠和反斜杠与示例一致

然后执行下面的bat文件

    setenv_x64.bat

编译
    
    D:
    cd D:\hyperexchange\eth_crosschain_privatekey\eth_sign
    notepad run_cmake_x64.bat

在打开的notepad输入以下内容，保存并退出。

    setlocal
    call "d:\hyperexchange\eth_crosschain_privatekey\eth_sign\setenv_x64.bat"
    cd %GRA_ROOT%\eth_crosschain_privatekey\eth_sign
    cmake-gui -G "Visual Studio 15"

然后执行下面的bat文件

    run_cmake_x64.bat

这会弹出cmake gui，但是如果你之前使用过CMake可能会显示错误的数据，那么修复：

- Where is the source code: `D:/hyperexchange/eth_crosschain_privatekey/eth_sign`
- Where to build the binaries: `D:/hyperexchange/eth_crosschain_privatekey/eth_sign/x64`
    
然后点击Configure.它可能会要求您为此项目指定生成器; 如果是，请选择Visual Studio 15 2017 Win64进行64位构建，然后选择Use default native compilers。查看输出并修复任何错误。然后点击Generate。

启动Visual Studio并加载 D:\hyperexchange\eth_crosschain_privatekey\x64\eth_crosschain_privatekey.sln

将Active Configuration设置为 `Release`, 确保Active Solution platform 是 `x64` 。

点击项目eth_sign，右键选择属性，在C/C++->目录->附加包含目录里添加boost路径：D:\hyperexchange\boost_1_64_0；添加leveldb的头文件路径：D:\hyperexchange\leveldb\include；在库管理器->常规->附加依赖项里添加：leveldb.lib，在附加库目录里添加：D:\hyperexchange\leveldb\x64\Release；点击应用确定；在eth_sign项目下找到levelDB.cpp文件，右键点击属性，将从生成中排除选择为是；

生成解决方案

编译成功后，将D:\hyperexchange\eth_crosschain_privatekey\eth_sign\x64\Release路径下的eth_sign.lib文件拷贝到D:\hyperexchange\eth_crosschain_privatekey\libs，如果没有libs路径请创建该路径。

> 构建hyperexchange

1.设置环境变量：

    D:
    cd D:\hyperexchange\HyperExchange
    notepad setenv_x64.bat

在打开的notepad输入以下内容，保存并退出。

    @echo off
    set GRA_ROOT=d:/hyperexchange
    set OPENSSL_ROOT=%GRA_ROOT%\OpenSSL
    set OPENSSL_ROOT_DIR=%OPENSSL_ROOT%
    set OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\include
    set BOOST_ROOT=%GRA_ROOT%\boost_1_64_0
    set CROSSCHAIN_PRIVATEKEY_PROJECT=%GRA_ROOT%/blocklink_crosschain_privatekey
    set ETH_CROSSCHAIN_PROJECT=%GRA_ROOT%/eth_crosschain_privatekey
    
    set PATH=%GRA_ROOT%\CMake\bin;%BOOST_ROOT%\stage\lib;%OPENSSL_ROOT%\lib\;%CROSSCHAIN_PRIVATEKEY_PROJECT%;%ETH_CROSSCHAIN_PROJECT;%PATH%
    
    echo Setting up VS2017 environment...
    call "%VS150COMNTOOLS%\..\..\VC\vcvarsall.bat" x86_amd64

在我的电脑上，VS150COMNTOOLS变量指:"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Auxiliary\Build\"，请在PC上设置文件vcvarsall.bat的正确路径。

注意保持斜杠和反斜杠与示例一致

然后执行下面的bat文件

    setenv_x64.bat


2.运行 CMake:

    D:
    cd D:\hyperexchange\HyperExchange
    notepad run_cmake_x64.bat

在打开的notepad输入以下内容，保存并退出。

    setlocal
    call "d:\hyperexchange\HyperExchange\setenv_x64.bat"
    cd %GRA_ROOT%\HyperExchange
    cmake-gui -G "Visual Studio 15"

然后执行下面的bat文件

    run_cmake_x64.bat

这会弹出cmake gui，但是如果你之前使用过CMake可能会显示错误的数据，那么修复：

- Where is the source code: `D:/hyperexchange/HyperExchange`
- Where to build the binaries: `D:/hyperexchange/HyperExchange/x64`

然后点击Configure.它可能会要求您为此项目指定生成器; 如果是，请选择Visual Studio 15 2017 Win64进行64位构建，然后选择Use default native compilers。查看输出并修复任何错误。然后点击Generate。

3.启动Visual Studio并加载D:\hyperexchange\x64\hyperexchange.sln

4.将Active Configuration设置为 `RelWithDebInfo`, 确保Active Solution platform 是 `x64` 。

5.生成解决方案

6.编译`INSTALL`，该目标将所有必需的文件复制到您的D:\hyperexchange\HyperExchange\install目录中，然后将所有这些文件复制到该bin目录中。

---