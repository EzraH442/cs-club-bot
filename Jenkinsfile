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
        sh 'docker build . -t cs-club-bot:$(git rev-parse --abbrev-ref HEAD | sed \'s/[^a-zA-Z0-9]/-/g\') '
      }
    }

  }
  environment {
    test_name = 'test_value'
  }
}