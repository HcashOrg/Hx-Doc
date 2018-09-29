# HyperExchange Building Guide

Last updated for v1.0.7.

## Building

**HX-Node** requires a 64-bit operating system to build

**HX-Node** requires a Boost version 1.64.0 or newer than it. Versions earlier than 1.64 are NOT supported. 

* [Ubuntu (64-bit) Linux](hx-building/#1)
* [OS X](hx-building/#2)
* [Windows](hx-building/#3)

---

<h2 id="1">BUILD_UBUNTU</h2>

---

> **Ubuntu 16.04 LTS (64-bit) Build and Install Instructions**

---

The following dependencies were necessary for a clean install on Ubuntu 16.04 LTS (64-bit):

    sudo apt-get update
    sudo apt-get install autoconf cmake make automake libtool git libboost-all-dev libssl-dev g++ libcurl4-openssl-dev

> **Build Crosschain Privatekey**

    git clone https://github.com/BlockLink/blocklink_crosschain_privatekey
    cd blocklink_crosschain_privatekey
    cmake -DCMAKE_BUILD_TYPE=Release .
    make

> **Build HyperExchange Node**

Add path of crosschain privatekey, please use the path of blocklink_crosschain_privatekey in your environment.  

    `export CROSSCHAIN_PRIVATEKEY_PROJECT=~/blocklink_crosschain_privatekey`


    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange
    git submodule update --init --recursive
    cmake .
    make

---

<h2 id="2">Building on OS X</h2>

> **HyperExchange Node OS X Build Instructions**

1.Install XCode and its command line tools by following the instructions here:<https://guide.macports.org/#installing.xcode>. In OS X 10.11 (El Capitan) and newer, you will be prompted to install developer tools when running a devloper command in the terminal. This step may not be needed.

2.Install Homebrew by following the instructions here: <http://brew.sh/>

3.Initialize Homebrew:

    brew doctor
    brew update

4.Install dependencies:

    brew install boost cmake git openssl autoconf automake libtool
    brew link --force openssl 

5.Optional. To support importing Bitcoin wallet files:

    brew install berkeley-db

6.Optional. To use TCMalloc in LevelDB:

    brew install google-perftools

7.Build Crosschain Privatekey

    git clone https://github.com/BlockLink/blocklink_crosschain_privatekey
    cd blocklink_crosschain_privatekey
    cmake .
    make

8.Clone the HyperExchange repository:

    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange

9.Build HyperExchange:

Add path of crosschain privatekey, please use the path of blocklink_crosschain_privatekey in your environment.  

    `export CROSSCHAIN_PRIVATEKEY_PROJECT=~/blocklink_crosschain_privatekey`

    git submodule update --init --recursive
    cmake .
    make

Notes: As mentioned elsewhere, HyperExchange depends on the third-party libraries "Boost" and "OpenSSL". These libraries need to be in certain version ranges. At the moment, Boost needs to be 1.64 or newer than it. OpenSSL needs to be in the 1.0.x range.

Boost: You can check which version(s) of boost you have by asking brew:

    brew search boost
To install another version of Boost (such as 1.64):

    brew install boost@1.64
OpenSSL: You may have an older version of OpenSSL than is required. If so, have brew get the latest:

    brew upgrade openssl
Compiling with these new versions: We must now tell cmake where these libraries are. Instead of the "cmake ." mentioned above, we use:

    cmake -DBOOST_ROOT=/usr/local/opt/boost@1.64 -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl .
and then proceed with the normal

    make

---

<h2 id="3">Building on Windows - Visual Studio 2017</h2>

> Prerequisites

* Microsoft Visual C++ 2017 Update 1 (the free Express edition will work)
* If you have multiple MSVS installation use MSVS Developer console from target version.
* This build is for 64bit binaries.

> Set up the directory structure

1.Create a base directory for all projects. I'm putting everything in D:\hyperexchange, you can use whatever you like. In several of the batch files and makefiles, this directory will be referred to as `GRA_ROOT`:


    mkdir D:\hyperexchange

2.Clone the hyperexchange repository

    D:
    cd D:\hyperexchange
    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange
    git submodule update --init --recursive

3.Download CMake

Download the latest Win32 Zip build CMake from [http://cmake.org/cmake/resources/software.html](https://cmake.org/download/) (version 3.12.2 as of this writing). Unzip it to your base directory, which will create a directory that looks something like `D:\hyperexchange\cmake-3.12.2-win64-x64`. Rename this directory to `D:\hyperexchange\CMake`.

If you already have CMake installed elsewhere on your system you can use it, but hyperexchange Core has a few batch files that expect it to be in the base directory's `CMake` subdirectory, so those scripts would need tweaking.

4.Boost

hyperexchange depends on the Boost libraries version 1.64.0 or newer than it. You can build them from source.

- download boost source from [http://www.boost.org/users/download/](http://www.boost.org/users/download/)

- unzip it to the base directory `D:\hyperexchange`.

- This will create a directory like `D:\hyperexchange\boost_1_64_0`.

5.OpenSSL

HyperExchange depends on OpenSSL version 1.0.2, and you must build this from source.

- download OpenSSL source from [http://www.openssl.org/source/](http://www.openssl.org/source/)
- Untar it to the base directory `D:\hyperexchange`
- this will create a directory like `D:\hyperexchange\openssl-1.0.2o`.

6.Crosschain Privatekey

HyperExchange depends on libboost, you must build this from source.

- download Crosschain Privatekey source from <https://github.com/BlockLink/blocklink_crosschain_privatekey>
- Untar it to the base directory `D:\hyperexchange`
- this will create a directory like `D:\hyperexchange\blocklink_crosschain_privatekey`.

At the end of this, your base directory should look like this (directory names will be slightly different for the 64bit versions):

    D:\hyperexchange
    +- HyperExchange
    +- boost_1_64_0
    +- CMake
    +- openssl-1.0.2o
    +- blocklink_crosschain_privatekey


> Build the library dependencies

1.Build OpenSSL DLLs

    D:
    cd D:\hyperexchange\openssl-1.0.2o
    perl Configure VC-WIN64A --prefix=D:\hyperexchange\OpenSSL
    ms\do_win64a
    nmake -f ms\ntdll.mak
    nmake -f ms\ntdll.mak install

If occur error like "NMAKE : fatal error U1077" when you excute command `nmake -f ms\ntdll.mak`, please try to use `VS2013 x64 native tool command prompt` tool to excute nmake command.

2.Build Boost

    D:
    cd D:\hyperexchange\boost_1_64_0
    bootstrap.bat
    .\b2.exe address-model=64

3.Build Crosschain Privatekey

Set up environment for building:

    D:
    cd D:\hyperexchange\blocklink_crosschain_privatekey
    notepad setenv_x64.bat

Put this into the notepad window, then save and quit.

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

In my PC,VS150COMNTOOLS:"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Auxiliary\Build\", please set a correct path of file vcvarsall.bat by your PC.

Note keep slash and backslash are consistency with the example

Then run

    setenv_x64.bat

Build
    
    D:
    cd D:\hyperexchange\blocklink_crosschain_privatekey
    notepad run_cmake_x64.bat

Put this into the notepad window, then save and quit.

    setlocal
    call "d:\hyperexchange\blocklink_crosschain_privatekey\setenv_x64.bat"
    cd %GRA_ROOT%\blocklink_crosschain_privatekey
    cmake-gui -G "Visual Studio 15"

Then run

    run_cmake_x64.bat

This pops up the cmake gui, but if you've used CMake before it will probably be showing the wrong data, so fix that:

- Where is the source code: `D:/hyperexchange/blocklink_crosschain_privatekey`
- Where to build the binaries: `D:/hyperexchange/blocklink_crosschain_privatekey/x64`
    
Then hit Configure. It may ask you to specify a generator for this project; if it does, choose Visual Studio 15 2017 Win64 for 64 bit builds and select Use default native compilers. Look through the output and fix any errors. Then hit Generate.

Launch Visual Studio and load D:\hyperexchange\blocklink_crosschain_privatekey\x64\blocklink_crosschain_privatekey.sln

Set Active Configuration to `RelWithDebInfo`, ensure Active Solution platform is `x64` for 64 bit builds

Build Solution

After build successfully,build `INSTALL` target, then will create a directory `third_libs` under blocklink_crosschain_privatekey, include `blocklink_libbitcoin.lib` and `blocklink_libbitcoin_secp256k1.lib`.

> Build project files for hyperexchange

1.Set up environment for building:

    D:
    cd D:\hyperexchange\HyperExchange
    notepad setenv_x64.bat

Put this into the notepad window, then save and quit.

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

In my PC,VS150COMNTOOLS:"C:\Program Files (x86)\Microsoft Visual Studio\2017\Community\VC\Auxiliary\Build\", please set a correct path of file vcvarsall.bat by your PC.

Note keep slash and backslash are consistency with the example

Then run

    setenv_x64.bat


2.Run CMake:

    D:
    cd D:\hyperexchange\HyperExchange
    notepad run_cmake_x64.bat

Put this into the notepad window, then save and quit.

    setlocal
    call "d:\hyperexchange\HyperExchange\setenv_x64.bat"
    cd %GRA_ROOT%\HyperExchange
    cmake-gui -G "Visual Studio 15"

Then run

    run_cmake_x64.bat

This pops up the cmake gui, but if you've used CMake before it will probably be showing the wrong data, so fix that:

- Where is the source code: `D:/hyperexchange/HyperExchange`
- Where to build the binaries: `D:/hyperexchange/HyperExchange/x64`

Then hit Configure. It may ask you to specify a generator for this project; if it does, choose Visual Studio 15 2017 Win64 for 64 bit builds and select Use default native compilers. Look through the output and fix any errors. Then hit Generate.

3.Launch Visual Studio and load D:\hyperexchange\x64\hyperexchange.sln

4.Set Active Configuration to `RelWithDebInfo`, ensure Active Solution platform is `x64` for 64 bit builds

5.Build Solution


6.Or you can build the `INSTALL` target in Visual Studio which will copy all of the necessary files into your `D:\hyperexchange\HyperExchange\install` directory, then copy all of those files to the `bin` directory.

---