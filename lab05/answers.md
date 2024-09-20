# Lab 5: Package Management Tutorial
Please complete the hands-on activities associated with this lab outlined in the <a href="https://csci338.github.io/fall2024/assignments/lab05" target="_blank">Lab 5 Instructions</a> (on the course website). When you're done, answer the following questions. Feel free to use Google / ChatGPT to help you think about these questions (but keep in mind that you'll need to know them for the midterm exam).

## Part 1. Operating System Package Managers
Answer the questions for either Homebrew or apt (depending on whether you're using Linux / WSL or Windows)
1. What is Homebrew / apt, and why is it useful?

APT is the windows form of Homebrew. (I have windows)
APT is a piece of software that allows you to update, install, and remove packages. In short, APT is a package manager.

2. What does the `update` command do (either `brew update` or `apt-get update`)?

Originally I thought the update command downloaded software, but it looks like it refreshes your version of software... this reminds me of synching a repository and doing a git pull for the changes to make sure everything is up to date.

3. Where are the packages that are managed by Homebrew / apt stored on your local computer?

APT is stored in a cache archive. The archive looks like it has different sub folders depending on what you download. Some examples of these are: bin, lib, etc, var. I think of this archive as your downloads folder, but one that's sorted and has categories.

## Part 2.
1. What is a python virtual environment?

A python virtual environment allows you to change libraries and packages without affecting other projects configurations. You could run other versions of things, or only run parts of packages that you need depending on the scope and needs of your project.

2. What is Poetry, and how is it different from other Python package managers like pip?

Poetry is a tool for managing dependencies specifically for Python. This allows you to control the use of different libraries and dependencies.

Poetry seems to do more in the background that pip. Pip is also a tool for managing dependencies, but unlike Poetry it doesn't automatically handle or resolve conflicts, it relies on a requirements text file, and it relies on other dependencies instead of having functions built in like Poetry has. Poetry seems to be more userfriendly also. 

3. What happened when you issued the `poetry new poetry-demo` command?

A package called poetry_demo was created inside of poetry-demo. Because Poetry has conflict handling built in, it changed the name I specified to avoid a potential conflict.

4. How do you run a python file using the poetry virtual environment?

To run a python file in the poetry virtual environment you run the command: poetry run python lab05-experiments.py (filename)

5. What is the purpose of the `poetry.lock` file?

The .lock file is used to lock versions of dependencies in different environments. This is something that pip does not do automatically.

## Part 3.
1. What are some of the things that `package.json` is used for?

Some things I saw in the package.json file were metadata, dependency lists, and scripts. Metadata was show in the form of the projects name version number, author, license. The list of dependencies were react, react dom, and vite (so things that the project needs to run). The script was code we were given, but this allows us to build the project.

2. Why wouldn't you want to check in the `node_modules` directory into GitHub?

It looks like node_modules has a list of things that the project needs to run. This might include dependencies, packages, etc. Each installed package has its own directory inside node_modules. Depending on the size of the project, this could include a lot of unnecessary resources for other projects not directly using those packages. 

