# <img class="hx-icon" src="/img/hx-icons/Wallet.svg" /> HyperExchange Building Guide

Last updated for v1.0.7.

## Building

**HX-Node** requires a 64-bit operating system to build

**HX-Node** requires a Boost version in the range [1.57, 1.65.1]. Versions earlier than 1.57 or newer than 1.65.1 are NOT supported. If your system Boost version is newer, then you will need to manually build an older version of Boost and specify it to CMake using` -DBOOST_ROOT`:


    cmake -DBOOST_ROOT=~/boost160 .


* Ubuntu (64-bit) Linux
* OS X
* Windows

---

## BUILD_UBUNTU

---

> **Ubuntu 16.04 LTS (64-bit) Build and Install Instructions**

---

The following dependencies were necessary for a clean install on Ubuntu 16.04 LTS (64-bit):

    sudo apt-get update
    sudo apt-get install autoconf cmake make automake libtool git libboost-all-dev libssl-dev g++ libcurl4-openssl-dev

> **Build HyperExchange Node**

    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange
    git submodule update --init --recursive
    cmake -DCMAKE_BUILD_TYPE=Release .
    make

> **Build Support Boost Version**

NOTE: HyperExchange Node requires a Boost version in the range [1.57 - 1.65.1]. Versions earlier than 1.57 or newer than 1.65.1 are NOT supported. If your system's Boost version is newer, then you will need to manually build an older version of Boost and specify it to CMake using DBOOST_ROOT.

The Boost which ships with Ubuntu 14.04 LTS (64-bit) is too old. You need to download the Boost tarball for Boost 1.57.0 (Note, 1.58.0 requires C++14 and will not build on Ubuntu 14.04 LTS (64-bit); this requirement was an accident, see this [mailing list post](http://boost.2283326.n4.nabble.com/1-58-1-bugfix-release-necessary-td4674686.html)).

    BOOST_ROOT=$HOME/opt/boost_1_57_0
    sudo apt-get update
    sudo apt-get install autotools-dev build-essential libbz2-dev libicu-dev python-dev
    wget -c 'http://sourceforge.net/projects/boost/files/boost/1.57.0/boost_1_57_0.tar.bz2/download' -O boost_1_57_0.tar.bz2
    [ $( sha256sum boost_1_57_0.tar.bz2 | cut -d ' ' -f 1 ) == "910c8c022a33ccec7f088bd65d4f14b466588dda94ba2124e78b8c57db264967" ] || ( echo 'Corrupt download' ; exit 1 )
    tar xjf boost_1_57_0.tar.bz2
    cd boost_1_57_0/
    ./bootstrap.sh "--prefix=$BOOST_ROOT"
    ./b2 install

Build with specific Boost version:

    cmake -DBOOST_ROOT="$BOOST_ROOT" -DCMAKE_BUILD_TYPE=Release .
    make

If error `{"message":"Timer Expired"}` dropped then it could be issue with websocketpp in linux kernel > 4.4.

Details here.

Steps to fix:

    cd ~/hx-node/libraries/fc/vendor/websocketpp
    git remote set-url origin https://github.com/DECENTfoundation/websocketpp.git
    git fetch
    git checkout 

And then build HyperExchange Node.

---

## Building on OS X

> **HyperExchange Node OS X Build Instructions**

1.Install XCode and its command line tools by following the instructions here:[https://guide.macports.org/#installing.xcode](https://guide.macports.org/#installing.xcode). In OS X 10.11 (El Capitan) and newer, you will be prompted to install developer tools when running a devloper command in the terminal. This step may not be needed.

2.Install Homebrew by following the instructions here: [http://brew.sh/](https://brew.sh/)

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

7.Clone the HyperExchange repository:

    git clone https://github.com/HcashOrg/HyperExchange.git
    cd HyperExchange

8.Build HyperExchange:

    git submodule update --init --recursive
    cmake .
    make

Notes: As mentioned elsewhere, HyperExchange depends on the third-party libraries "Boost" and "OpenSSL". These libraries need to be in certain version ranges. At the moment, Boost needs to be between 1.57 and 1.65. OpenSSL needs to be in the 1.0.x range.

Boost: You can check which version(s) of boost you have by asking brew:

    brew search boost
To install another version of Boost (such as 1.60):

    brew install boost@1.60
OpenSSL: You may have an older version of OpenSSL than is required. If so, have brew get the latest:

    brew upgrade openssl
Compiling with these new versions: We must now tell cmake where these libraries are. Instead of the "cmake ." mentioned above, we use:

    cmake -DBOOST_ROOT=/usr/local/opt/boost@1.60 -DOPENSSL_ROOT_DIR=/usr/local/opt/openssl .
and then proceed with the normal

    make

---

## Building on Windows - Visual Studio 2017

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

Download the latest Win32 Zip build CMake from [http://cmake.org/cmake/resources/software.html](https://cmake.org/download/) (version 2.8.12.2 as of this writing). Unzip it to your base directory, which will create a directory that looks something like `D:\hyperexchange\cmake-2.8.12.2-win32-x86`. Rename this directory to `D:\hyperexchange\CMake`.

If you already have CMake installed elsewhere on your system you can use it, but hyperexchange Core has a few batch files that expect it to be in the base directory's `CMake` subdirectory, so those scripts would need tweaking.

4.Boost

hyperexchange depends on the Boost libraries version 1.57 ~ 1.65. You can build them from source.

- download boost source from [http://www.boost.org/users/download/](http://www.boost.org/users/download/)

- unzip it to the base directory `D:\hyperexchange`.

- This will create a directory like `D:\hyperexchange\boost_1_57_0`.

5.OpenSSL

HyperExchange depends on OpenSSL version 1.0.1 or 1.0.2, and you must build this from source.

- download OpenSSL source from [http://www.openssl.org/source/](http://www.openssl.org/source/)
- Untar it to the base directory `D:\hyperexchange`
- this will create a directory like `D:\hyperexchange\openssl-1.0.1g`.

At the end of this, your base directory should look like this (directory names will be slightly different for the 64bit versions):

    D:\hyperexchange
    +- hyperexchange
    +- boost_1_57_0
    +- CMake
    +- openssl-1.0.1g

> Build the library dependencies

1.Set up environment for building:

    D:
    cd D:\hyperexchange
    notepad setenv_x64.bat

Put this into the notepad window, then save and quit.
    @echo off
    set GRA_ROOT=d:\hyperexchange
    set OPENSSL_ROOT=%GRA_ROOT%\openssl-1.0.1g
    set OPENSSL_ROOT_DIR=%OPENSSL_ROOT%
    set OPENSSL_INCLUDE_DIR=%OPENSSL_ROOT%\include
    set BOOST_ROOT=%GRA_ROOT%\boost_1_57_0
    
    set PATH=%GRA_ROOT%\CMake\bin;%BOOST_ROOT%\lib;%PATH%
    
    echo Setting up VS2013 environment...
    call "%VS120COMNTOOLS%\..\..\VC\vcvarsall.bat" x86_amd64
Then run

    setenv_x64.bat

2.Build OpenSSL DLLs

    D:
    cd D:\hyperexchange\openssl-1.0.1g
    perl Configure VC-WIN64A --prefix=D:\hyperexchange\OpenSSL
    ms\do_win64a
    nmake -f ms\ntdll.mak
    nmake -f ms\ntdll.mak install

3.Build Boost

    D:
    cd D:\hyperexchange\boost_1_57_0
    bootstrap
    .\b2.exe address-model=64

> Build project files for hyperexchange

1.Run CMake:

    D:
    cd D:\hyperexchange\hyperexchange
    notepad run_cmake_x64.bat

Put this into the notepad window, then save and quit.

    setlocal
    call "d:\hyperexchange\setenv_x64.bat"
    cd %GRA_ROOT%
    cmake-gui -G "Visual Studio 12"

Then run

    run_cmake_x64.bat

This pops up the cmake gui, but if you've used CMake before it will probably be showing the wrong data, so fix that:

- Where is the source code: `D:\hyperexchange\hyperexchange`
- Where to build the binaries: `D:\hyperexchange\x64`

Then hit Configure. It may ask you to specify a generator for this project; if it does, choose Visual Studio 12 2017 Win64 for 64 bit builds and select Use default native compilers. Look through the output and fix any errors. Then hit Generate.

2.Launch Visual Studio and load D:\hyperexchange\x64\hyperexchange.sln
3.Set Active Configuration to `RelWithDebInfo`, ensure Active Solution platform is `x64` for 64 bit builds
4.Build Solution

Or you can build the `INSTALL` target in Visual Studio which will copy all of the necessary files into your `D:\hyperexchange\install` directory, then copy all of those files to the `bin` directory.

---