pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/ezrah442/cs-club-bot', branch: 'main', credentialsId: 'e0660be1-ad5e-4d51-b873-000c682efbd5')
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