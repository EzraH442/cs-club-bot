pipeline {
  agent any
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/ezrah442/cs-club-bot', branch: 'jenkins', credentialsId: 'e0660be1-ad5e-4d51-b873-000c682efbd5')
      }
    }

    stage('build') {
      steps {
        sh 'docker build . --build-arg TOKEN=$DISCORD_BOT_TOKEN --build-arg CLIENT_ID=$DISCORD_BOT_CLIENT_ID --build-arg CF_ID=$CODEFORCES_API_ID --build-arg CF_SECRET=$CODEFORCES_API_SECRET -t cs-club-bot:$(git rev-parse --abbrev-ref HEAD | sed \'s/[^a-zA-Z0-9]/-/g\') '
      }
    }

  }
  environment {
    test_name = 'test_value'
  }
}
