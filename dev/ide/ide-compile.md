# IDE Contract Compile
The single contract in IDE exists as project. Top folders which are csharp, java, kotlin and uvlua are initial folder and not editable. Root folder in top folders is the actual contract project, anything in root folder belogs the project.

The Compiler take one project as compiling unit while compiling, you can choose any contract file under project folder to comile the whole project.

Right click the contract file and slect the `Compile` or click `Debug`->`Compile` in menu bar or press F7 to compile the current project.

![Start IDE](/img/research/contract_compile_in.png)
![Start IDE](/img/research/contract_compile_in1.png)

The Compiler will generate the gpc file if the contract successfully compiled. You can browser the context of gpc by clicking it under the project folder. Functions and events of contract are shown at the left-bottom of main window and the out put during compiling.

![Start IDE](/img/research/contract_compile_res.png)

## Envrionment requirement
The compiling of uvlua contract is environment independent. JDK8 is needed and make sure command of java is ok if you want compile java and kotlin  contract. The compiling of c# contract need the install of .net framework4.5 or later and make sure the dotnet command can successfully run.