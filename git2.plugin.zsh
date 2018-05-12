# Query/use custom command for `git`.
zstyle -s ":vcs_info:git:*:-all-" "command" _omz_git_git_cmd
: ${_omz_git_git_cmd:=git}

# The name of the current branch
# Back-compatibility wrapper for when this function was defined here in
# the plugin, before being pulled in to core lib/git.zsh as git_current_branch()
# to fix the core -> git plugin dependency.
function current_branch() {
	git_current_branch
}

# ALIASES
alias g='git'

alias ga='git add'
alias gaa='git add -A'
alias gapa='git add --patch'
alias gau='git add --update'

alias gb='git-br' # https://www.npmjs.com/package/git-br
alias gba='git branch -a'
alias gbd='git branch -D'
alias gbda='git branch --no-color --merged | command grep -vE "^(\*|\s*(master|develop|dev)\s*$)" | command xargs -n 1 git branch -d'
alias gbed='git branch --edit-description'
alias gbl='git blame -b -w'
alias gbnm='git branch --no-merged'
alias gbr='git branch --remote'
alias gbs='checkit $@' #https://www.npmjs.com/package/check-it-out
alias gbsb='git bisect bad'
alias gbsg='git bisect good'
alias gbsr='git bisect reset'
alias gbss='git bisect start'

alias gc='git commit -m'
alias gc!='git commit -v --amend'
alias gcn!='git commit -v --no-edit --amend'
alias gca='git commit -v -a'
alias gca!='git commit -v -a --amend'
alias gcan!='git commit -v -a --no-edit --amend'
alias gcans!='git commit -v -a -s --no-edit --amend'
alias gcam='git add -A && git commit -m'
alias gcams='git add -A && git commit -S -m'
alias gcsm='git commit -s -m'
alias gcb='git checkout -b'
alias gcf='git config --list'
alias gcl='git clone'
alias gclean='git clean -dfx'
alias gcleandry='git clean -dfnx'
alias gpristine='git reset --hard && git clean -dfx'
alias gcm='git checkout master'
alias gcd='git checkout develop'
alias gco='git checkout'
alias gcount='git rev-list --count $1'
compdef _git gcount
alias gcp='git cherry-pick'
alias gcpa='git cherry-pick --abort'
alias gcpc='git cherry-pick --continue'
alias gcs='git commit -S'

alias gdca='git diff --cached'
alias gdct='git describe --tags `git rev-list --tags --max-count=1`'
alias gdt='git diff-tree --no-commit-id --name-only -r'
alias gdw='git diff --word-diff'

alias gf='git fetch'
alias gfa='git fetch --all --prune'
alias gfo='git fetch origin'
alias gfor='git fetch origin && git reset --hard origin/$(git_current_branch)'
alias gfr='git fetch upstream && git reset --hard'
alias gfu='git fetch upstream'
alias gfur='git fetch upstream && git reset --hard upstream/$(git_current_branch) && git clean -dfnx'

alias gg='git gui citool'
alias gga='git gui citool --amend'

alias ggpo='git pull origin $(git_current_branch)'
alias ggpu='git pull upstream $(git_current_branch)'

alias ggsup='git branch --set-upstream-to=origin/$(git_current_branch)'
alias gpsup='git push --set-upstream origin $(git_current_branch)'

alias ghh='git help'

alias gignore='git update-index --assume-unchanged'
alias gignored='git ls-files -v | grep "^[[:lower:]]"'
alias git-svn-dcommit-push='git svn dcommit && git push github master:svntrunk'
compdef _git git-svn-dcommit-push=git

alias gk='\gitk --all --branches'
compdef _git gk='gitk'
alias gke='\gitk --all $(git log -g --pretty=%h)'
compdef _git gke='gitk'

alias gl='git log'
alias glg='git log --stat'
alias glgp='git log --stat -p'
alias glgg='git log --graph'
alias glgga='git log --graph --decorate --all'
alias glgm='git log --graph --max-count=10'
alias glo='git log --oneline --decorate'
alias glol="git log --graph --pretty='%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
alias glola="git log --graph --pretty='%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --all"
alias glog='git log --oneline --decorate --graph'
alias gloga='git log --oneline --decorate --graph --all'

alias gm='git merge'
alias gmom='git merge origin/master'
alias gmt='git mergetool --no-prompt'
alias gmtvim='git mergetool --no-prompt --tool=vimdiff'
alias gmum='git merge upstream/master'

alias gp='git push'
alias gpd='git push --dry-run'
alias gpf='git push --force origin $(git_current_branch)'
alias gpoat='git push origin --all && git push origin --tags'
compdef _git gpoat=git-push
alias gpod='git push origin --delete $1'
alias gpv='git push -v'

alias gr='git remote'
alias gra='git remote add'
alias grb='git rebase'
alias grb6='git fetch upstream ee-6.2.x && git rebase upstream/ee-6.2.x'
alias grba='git rebase --abort'
alias grbc='git rebase --continue'
alias grbi='git rebase -i'
alias grbm='git fetch upstream master && git rebase upstream/master'
alias grbs='git rebase --skip'
alias grh='git reset --hard'
alias grhm='git fetch upstream master && git reset --hard upstream/master'
alias grh6='git fetch upstream ee-6.2.x && git reset --hard upstream/ee-6.2.x'
alias grhh='git reset HEAD --hard'
alias grmv='git remote rename'
alias grrm='git remote remove'
alias grs='git reset --soft'
alias grset='git remote set-url'
alias grt='cd $(git rev-parse --show-toplevel || echo ".")'
alias gru='git reset --'
alias grup='git remote update'
alias grv='git remote -v'

alias gsb='git status -sb'
alias gsd='git svn dcommit'
alias gsi='git submodule init'
alias gsps='git show --pretty=short --show-signature'
alias gsr='git svn rebase'
alias gss='git status -s'
alias gst='git stash'
alias gsta='git stash apply'
alias gstc='git stash clear'
alias gstd='git stash drop'
alias gstl='git stash list'
alias gstp='git stash pop'
alias gstr='git stash save --keep-index && git stash drop' # remove all unstaged files
alias gsts='git stash save'
alias gsu='git submodule update'

alias gts='git tag -s'
alias gtv='git tag | sort -V'

alias gunignore='git update-index --no-assume-unchanged'
alias gunwip='git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
alias gup='git pull --rebase'
alias gupv='git pull --rebase -v'
alias gun='git config --global user.name'
alias glum='git pull upstream master'

alias gwch='git whatchanged -p --abbrev-commit --pretty=medium'
alias gwip='git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify -m "--wip-- [skip ci]"'


# FUNCTIONS
function gopen(){
	if [ $# -gt 0 ]
	then
		opn http://github.com/$1/$(repo_name)/commit/$(git rev-parse HEAD) -- "firefox" --new-tab
	else
		opn http://github.com/$(gun)/$(repo_name)/commit/$(git rev-parse HEAD) -- "firefox" --new-tab
	fi
}

function gpr(){
	gh pr -s $1 -b $2 -t $3 -D "Hey @$1 $4, here is the work for [$3](https://issues.liferay.com/browse/$3) :rocket:. Thanks for reviewing :relieved: $5"
}

# Simple version
function gprs(){
	gh pr -s $1 -b $2 -t $3 -D "$4"
}

# Show open PRs on Organization
function gpro(){
	gh pr -O $1 --all
}

# Show close PR
function gprc(){
	gh pr
}

# Fetches and rebases PR
function gprb(){
	gh pr $1 -f -R
}

# Forwards PR to another repo, closes the PR, and comments in both locations
function gprf(){
	gh pr $1 --fwd $2
}

function gpo(){
  git push origin $(git_current_branch)
  gopen $1
}

function gpu(){
  git push upstream $(git_current_branch)
  gopen $1
}

function gsave(){
	gaa
	git commit -m $1
	git push origin $(git_current_branch)
	gopen $2
}

function repo_name() {
	git remote -v | head -n1 | awk '{print $2}' | sed -e 's,.*:\(.*/\)\?,,' -e 's/\.git$//'
}

function work_in_progress() {
	if $(git log -n 1 2>/dev/null | grep -q -c "\-\-wip\-\-"); then
		echo "WIP!!"
	fi
}

#a397b0edbf80ca16704e7015e178498bd241a12c