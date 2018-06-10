---
title: "Actions"
description: "Cool actions you can do in linux"
author: "Ryan Garant"

---

<article id="1">

## Adding GitHub name and email in the global config

```shell
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```

</article>

<article id="2">

## Change Default Terminal

```shell
sudo chsh -s $(which zsh)
```

</article>

<article id="3">

## How to install a .deb file

```shell
sudo dpkg -i /path/to/deb/file
```

</article>

<article id="4">

## Change Having to type password on Sudo command

Open terminal window and type:

```
sudo visudo
```

In the bottom of the file, type the follow:

```
username ALL=(ALL) NOPASSWD: ALL
```

</article>

<article id="5">

## Permissions

- Permissions are granted with:

```
chmod a+x filename
```

If you run a `ls -l` in the cli you will get a list of files and folders with a string at the front like so:

- -rw-rw-r--
  - The first space will be blank for a file but `d` if it is a **directory**
  - The next three spaces represent permissions for **current user**
  - The next three **groups**
  - The next three **all users**
  - `x` = executable
  - `w` = writable
  - `r` = readable

* So when running `a+x` you are saying to make file executable for all users

</article>

<article id="6">

## How to Remap Keys in Ubuntu

- This approach relies upon a program to listen for keys events and then dispatching the key combo you want using a virtual keybard

1.  `sudo apt install xvkbd` This is the virtual keyboard
2.  `sudo apt install xbindkeys` This is the listener
3.  `sudo apt install xbindkeys-config` This is the listener gui

- The data goes into your `.xbindkeysrc` file in your home dir

Here is an example:

```bash
#Select Left
"xvkbd -xsendevent -text "\C\S\[Left]""
    Control+Shift+Mod2+Mod5 + j

#Select Right
"xvkbd -xsendevent -text "\C\S\[Right]""
    Control+Shift+Mod2+Mod5 + l
```

- The above simply listens for the meta key + control + shift and sends a select left and select right text command with the virtual keyboard

- After modifying your `.xbindkeysrc` file you must kill the xbindkeys process with `pkill -9 xbindkeys` and then rerun it with `xbindkeys`
  - If you want to verify it is running you can do `pgrep xbindkeys` which will output the **pid**

</article>

<article id="7">

## How to unzip a tar file

```
tar -zxvf file
```

### How to unzip a gz file

```
gunzip < file.gz > file
```

</article>
