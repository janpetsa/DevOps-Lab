pipeline {
  agent {
    docker {
      image 'node:8-alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build and test pipeline') {
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }

  }
}