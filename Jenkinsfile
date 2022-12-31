pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/ezrah442/cs-club-bot', branch: 'main', credentialsId: 'github')
      }
    }

    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

  }
  environment {
    test_name = 'test_value'
  }
}