(window["webpackJsonpcommand-helper"]=window["webpackJsonpcommand-helper"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),o=(a(13),a(14),a(1)),s=a(2),g=a(4),m=a(3),h=a(5),l=function(e){function t(){return Object(o.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"input-group my-2 px-2"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("span",{className:"input-group-text"},"Select a gategory:")),r.a.createElement("select",{className:"custom-select mw-25",value:this.props.selectValue,onChange:this.props.selectChange},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"git"},"git"),r.a.createElement("option",{value:"npm"},"npm"),r.a.createElement("option",{value:"windows"},"Windows")),r.a.createElement("input",{className:"form-control w-50",type:"search",placeholder:"Enter a keyword",onChange:this.props.searchChange})))}}]),t}(n.Component),d=function(e){function t(){return Object(o.a)(this,t),Object(g.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card card-body m-2 shadow-sm"},r.a.createElement("p",{className:"card__command card-title"},r.a.createElement("code",{className:"py-1 px-2"},this.props.command)),r.a.createElement("p",{className:"card__type card-subtitle text-muted"},this.props.category),r.a.createElement("p",{className:"card__description card-text"},this.props.description))}}]),t}(n.Component),p=[{command:"git init",category:"Getting & Creating Projects",description:"Initialize a local Git repository"},{command:"git clone ssh://git@github.com/[username]/[repository-name].git",category:"Create a local copy of a remote repository",description:"Initialize a local Git repository"},{command:"git status",category:"Snapshotting",description:"Check status"},{command:"git add [file-name.txt]",category:"Snapshotting",description:"Add a file to the staging area"},{command:"git add -A",category:"Snapshotting",description:"Add all new and changed files to the staging area"},{command:'git commit -m "[commit message]"',category:"Snapshotting",description:"Commit changes"},{command:"git rm -r [file-name.txt]",category:"Snapshotting",description:"Remove a file (or folder)"},{command:"git branch",category:"Branching & Merging",description:"List branches (the asterisk denotes the current branch)"},{command:"git branch -a",category:"Branching & Merging",description:"List all branches (local and remote)"},{command:"git branch [branch name]",category:"Branching & Merging",description:"Create a new branch"},{command:"git branch -d [branch name]",category:"Branching & Merging",description:"Delete a branch"},{command:"git push origin --delete [branch name]",category:"Branching & Merging",description:"Delete a remote branch"},{command:"git checkout -b [branch name]",category:"Branching & Merging",description:"Create a new branch and switch to it"},{command:"git checkout -b [branch name] origin/[branch name]",category:"Branching & Merging",description:"Clone a remote branch and switch to it"},{command:"git branch -m [old branch name] [new branch name]",category:"Branching & Merging",description:"Rename a local branch"},{command:"git checkout [branch name]",category:"Branching & Merging",description:"Switch to a branch"},{command:"git checkout -",category:"Branching & Merging",description:"Switch to the branch last checked out"},{command:"git checkout -- [file-name.txt]",category:"Branching & Merging",description:"Discard changes to a file"},{command:"git merge [branch name]",category:"Branching & Merging",description:"Merge a branch into the active branc"},{command:"git merge [source branch] [target branch]",category:"Branching & Merging",description:"Merge a branch into a target branch"},{command:"git stash",category:"Branching & Merging",description:"Stash changes in a dirty working directory"},{command:"git stash clear",category:"Branching & Merging",description:"Remove all stashed entries"},{command:"git push origin [branch name]",category:"Sharing & Updating Projects",description:"Push a branch to your remote repository"},{command:"git push -u origin [branch name]",category:"Sharing & Updating Projects",description:"Push changes to remote repository (and remember the branch)"},{command:"git push",category:"Sharing & Updating Projects",description:"Push changes to remote repository (remembered branch)"},{command:"git push origin --delete [branch name]",category:"Sharing & Updating Projects",description:"Delete a remote branch"},{command:"git pull",category:"Sharing & Updating Projects",description:"Update local repository to the newest commit"},{command:"git pull origin [branch name]",category:"Sharing & Updating Projects",description:"Pull changes from remote repository"},{command:"git remote add origin ssh://git@github.com/[username]/[repository-name].git",category:"Sharing & Updating Projects",description:"Add a remote repository"},{command:"git remote set-url origin ssh://git@github.com/[username]/[repository-name].git",category:"Sharing & Updating Projects",description:"Set a repository's origin branch to SSH"},{command:"git log",category:"View changes",description:"Pull changes from remote repository"},{command:"git log --summary",category:"Inspection & Comparison",description:"View changes (detailed)"},{command:"git diff [source branch] [target branch]",category:"Inspection & Comparison",description:"Preview changes before merging"}],u=[{command:"npm install",category:"Installing Packages",description:"Install package"}],b=[{command:"cd",category:"Routing",description:"Initialize a local Git repository"}];var y=function(e){var t=[];switch(e.selectFilter){case"all":t=p.concat(u,b);break;case"git":t=p;break;case"npm":t=u;break;case"windows":t=b}var a=t.filter(function(t){return t.command.toLowerCase().includes(e.searchFilter.toLowerCase())||t.category.toLowerCase().includes(e.searchFilter.toLowerCase())||t.description.toLowerCase().includes(e.searchFilter.toLowerCase())}).map(function(e,t){return r.a.createElement(d,{key:t,command:e.command,category:e.category,description:e.description})});return r.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-between"},a)},f={overflowY:"scroll",height:"92vh"};var w=function(e){return r.a.createElement("div",{className:"container",style:f},e.children)},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(g.a)(this,Object(m.a)(t).call(this,e))).handleSearchChange=function(e){a.setState({search:e.target.value})},a.handleSelectChange=function(e){a.setState({select:e.target.value})},a.state={search:"",select:"all"},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"t"},r.a.createElement("h1",{className:"title-main text-center mb-3"},"Command Helper"),r.a.createElement(l,{selectValue:this.state.select,searchChange:this.handleSearchChange,selectChange:this.handleSelectChange}),r.a.createElement(w,null,r.a.createElement(y,{searchFilter:this.state.search,selectFilter:this.state.select})))}}]),t}(n.Component);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b1a3eb16.chunk.js.map