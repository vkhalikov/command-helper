const gitData = [
	{
		"command": "git init",
		"category": "Getting & Creating Projects",
		"description": "Initialize a local Git repository"
	},
	{
		"command": "git clone ssh://git@github.com/[username]/[repository-name].git",
		"category": "Create a local copy of a remote repository",
		"description": "Initialize a local Git repository"
	},

	{
		"command": "git status",
		"category": "Snapshotting",
		"description": "Check status"
	},
	{
		"command": "git add [file-name.txt]",
		"category": "Snapshotting",
		"description": "Add a file to the staging area"
	},
	{
		"command": "git add -A",
		"category": "Snapshotting",
		"description": "Add all new and changed files to the staging area"
	},
	{
		"command": 'git commit -m "[commit message]"',
		"category": "Snapshotting",
		"description": "Commit changes"
	},
	{
		"command": "git rm -r [file-name.txt]",
		"category": "Snapshotting",
		"description": "Remove a file (or folder)"
	},

	{
		"command": "git branch",
		"category": "Branching & Merging",
		"description": "List branches (the asterisk denotes the current branch)"
	},
	{
		"command": "git branch -a",
		"category": "Branching & Merging",
		"description": "List all branches (local and remote)"
	},
	{
		"command": "git branch [branch name]",
		"category": "Branching & Merging",
		"description": "Create a new branch"
	},
	{
		"command": "git branch -d [branch name]",
		"category": "Branching & Merging",
		"description": "Delete a branch"
	},
	{
		"command": "git push origin --delete [branch name]",
		"category": "Branching & Merging",
		"description": "Delete a remote branch"
	},
	{
		"command": "git checkout -b [branch name]",
		"category": "Branching & Merging",
		"description": "Create a new branch and switch to it"
	},
	{
		"command": "git checkout -b [branch name] origin/[branch name]",
		"category": "Branching & Merging",
		"description": "Clone a remote branch and switch to it"
	},
	{
		"command": "git branch -m [old branch name] [new branch name]",
		"category": "Branching & Merging",
		"description": "Rename a local branch"
	},
	{
		"command": "git checkout [branch name]",
		"category": "Branching & Merging",
		"description": "Switch to a branch"
	},
	{
		"command": "git checkout -",
		"category": "Branching & Merging",
		"description": "Switch to the branch last checked out"
	},
	{
		"command": "git checkout -- [file-name.txt]",
		"category": "Branching & Merging",
		"description": "Discard changes to a file"
	},
	{
		"command": "git merge [branch name]",
		"category": "Branching & Merging",
		"description": "Merge a branch into the active branc"
	},
		{
		"command": "git merge [source branch] [target branch]",
		"category": "Branching & Merging",
		"description": "Merge a branch into a target branch"
	},
	{
		"command": "git stash",
		"category": "Branching & Merging",
		"description": "Stash changes in a dirty working directory"
	},
	{
		"command": "git stash clear",
		"category": "Branching & Merging",
		"description": "Remove all stashed entries"
	},

	{
		"command": "git push origin [branch name]",
		"category": "Sharing & Updating Projects",
		"description": "Push a branch to your remote repository"
	},
	{
		"command": "git push -u origin [branch name]",
		"category": "Sharing & Updating Projects",
		"description": "Push changes to remote repository (and remember the branch)"
	},
	{
		"command": "git push",
		"category": "Sharing & Updating Projects",
		"description": "Push changes to remote repository (remembered branch)"
	},
	{
		"command": "git push origin --delete [branch name]",
		"category": "Sharing & Updating Projects",
		"description": "Delete a remote branch"
	},
	{
		"command": "git pull",
		"category": "Sharing & Updating Projects",
		"description": "Update local repository to the newest commit"
	},
	{
		"command": "git pull origin [branch name]",
		"category": "Sharing & Updating Projects",
		"description": "Pull changes from remote repository"
	},
	{
		"command": "git remote add origin ssh://git@github.com/[username]/[repository-name].git",
		"category": "Sharing & Updating Projects",
		"description": "Add a remote repository"
	},
	{
		"command": "git remote set-url origin ssh://git@github.com/[username]/[repository-name].git",
		"category": "Sharing & Updating Projects",
		"description": "Set a repository's origin branch to SSH"
	},

	{
		"command": "git log",
		"category": "View changes",
		"description": "Pull changes from remote repository"
	},
	{
		"command": "git log --summary",
		"category": "Inspection & Comparison",
		"description": "View changes (detailed)"
	},
	{
		"command": "git diff [source branch] [target branch]",
		"category": "Inspection & Comparison",
		"description": "Preview changes before merging"
	}
]

export default gitData;