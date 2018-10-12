
# Setting PATH for Python 2.7
# The original version is saved in .bash_profile.pysave
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
PATH="/Library/Frameworks/Python.framework/Versions/2.7/bin:${PATH}"
export PATH

export WORKON_HOME=$HOME/.virtualenvs 
export PROJECT_HOME=$HOME/Code
source /Library/Frameworks/Python.framework/Versions/2.7/bin/virtualenvwrapper.sh

export PS1="\[\033[36m\]\u\[\033[m\]@\[\033[32m\]\h:\[\033[33;1m\]\w\[\033[m\]\$ "
export CLICOLOR=1
export LSCOLORS=ExFxBxDxCxegedabagacad

alias ls='ls -GFh'
alias ll='ls -FGlAhp'  # Preferred 'ls' implementation
alias cd..='cd../'
alias ..='cd ../'
alias ...='cd ../../'
alias edit='subl'
alias f='open -a Finder ./'
alias ~='cd ~'
alias c='clear'
alias please='sudo $(fc -ln -1)'
alias plz=sudo
