---
layout: default #Do not change.
title: "GLPK" #Article title.
date:   2022-12-14 14:02:54 +0200
author: marco #Author's nick.
nav_order: 4
nav_exclude: true
---



GLPK
====

Installation
------------

-   Windows: [GUSEK](http://gusek.sourceforge.net/gusek.html)

-   Ubuntu and WSL:
	```
	sudo apt-get install glpk-utils libglpk40 libglpk-dev glpk-doc python3-pulp
	```

-   Manual installation on Linux and Mac: download [GLPK](http://www.gnu.org/software/glpk/),
    untar and execute:

    ```
	mkdir ~/usr
    ./configure --prefix=/home/yourid/usr
    make
    make install
	```
    
	The exectuable is then `~/usr/bin/glpsol`, or you
    can add the path in your bash config file:

    ```
	echo "export PATH=PATH:~/usr/bin" >> ~/.bashrc
    ```

    or `.bash` config file (check `echo $SHELL@` to know
    which shell you are using)

    ```
	echo "export PATH=${PATH}:~/usr/bin" >> ~/.bashrc
    ```

    As text editor you can use `emacs` that offers
    syntax highlighting, provided the extension of the model file is
    `.mod`.

Documentation
-------------

The main reference is the documentation file `gmpl.pdf`
(70 pages) from `doc` directory in the installation
directory. Moreover check the files `.mod` in the
directory `examples/`.

These might also be worth skimming through:

-   [The GNU Linear Programming Kit, Part 1: Introduction to linear
    optimization](http://www.ibm.com/developerworks/linux/library/l-glpk1/)
-   [The GNU Linear Programming Kit, Part 2: Intermediate problems in
    linear
    programming](http://www.ibm.com/developerworks/linux/library/l-glpk2/)
-   [The GNU Linear Programming Kit, Part 3: Advanced problems and
    elegant
    solutions](http://www.ibm.com/developerworks/linux/library/l-glpk3/)

Usage
-----

-   To solve with GLPK solver:
	```
	glpsol -m plan.mod -o plan.sol
	```

-   To solve with Gurobi:

    ```
	glpsol --check --model plan.mod --wlp plan.lp
    gurobi.sh
    gurobi> m=read("plan.lp")
    gurobi> m.optimize()
	```

-   To solve with SCIP from ZIBOPT

    ```
	glpsol --check --model plan.mod --wlp plan.lp
    scip -f plan.lp 
	```

-   To solve with CPLEX

    ```
	glpsol --check --model plan.mod --wlp plan.lp
    cplex plan.lp > read plan.lp > optimize > help
	```

[Why GLPK](http://spokutta.wordpress.com/the-gnu-linear-programming-kit-glpk/)?
