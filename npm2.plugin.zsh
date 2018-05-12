alias nb='npm run build'
alias nd='npm run dev'
alias ng='npm i -g '
alias ni='npm i'
alias nis='npm i -S '
alias nid='npm i -D '
alias no='npm outdated'
alias nl='npm list'
alias nlink='npm link'
alias nulink='npm unlink'
alias nlocation='npm -g list --depth=0'
alias nu='npm uninstall '
alias nud='npm uninstall -D '
alias nug='npm uninstall -g '
alias nus='npm uninstall -S '
alias nr='npm run '
alias ns='npm start'
alias nt='npm test'
alias nu='npm update'

alias y='yarn'
alias ya='yarn add '
alias yag='yarn add -g '
alias yad='yarn add -D '
alias yb='yarn build'
alias yd='yarn run dev'
alias yr='yarn run '
alias yre='yarn remove '
alias ys='yarn start'
alias yse='yarn serve'
alias yt='yarn test'
alias yu='yarn upgrade'

function nv(){
	npm view $1 versions --json
}

function nlatest(){
	npm view $1 version
}

function ncv(){
	echo "console.log(require('./package.json').dependencies.$1);" | node
	echo "console.log(require('./package.json').devDependencies.$1);" | node
}