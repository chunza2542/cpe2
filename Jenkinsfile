pipeline {
	agent { label 'master' }
	stages {
		stage('Source') {
			steps {
				git branch 'master',
					url: 'https://github.com/chunza2542/cpe2.git'
			}
		}
		stage('Build') {
			steps {
				sh 'npm install'
			}
		}
		stage('Test') {
			steps {
				echo 'testing...'
			}
		}
		state('Deploy') {
			steps {
				sh 'npm start'
			}
		}
	}
}
