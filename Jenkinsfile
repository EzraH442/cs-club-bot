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
        withCredentials(bindings: [string(credentialsId: 'TOKEN', variable: 'DISCORD_BOT_TOKEN'), 
                                 string(credentialsId: 'CLIENT_ID', variable: 'DISCORD_BOT_CLIENT_ID'),
                                 string(credentialsId: 'CF_ID', variable: 'CODEFORCES_API_ID'),
                                 string(credentialsId: 'CF_SECRET', variable: 'CODEFORCES_API_SECRET'),
                                 string(credentialsId: 'dummy', variable: 'DUMMY_VARIABLE') 
                                 ]) {
          sh '''
          echo $DUMMY_VARIABLE
          docker build .             --build-arg TOKEN=$DISCORD_BOT_TOKEN             --build-arg CLIENT_ID=$DISCORD_BOT_CLIENT_ID             --build-arg CF_ID=$CODEFORCES_API_ID             --build-arg CF_SECRET=$CODEFORCES_API_SECRET             -t cs-club-bot:$(git rev-parse --abbrev-ref HEAD | sed \'s/[^a-zA-Z0-9]/-/g\')
          '''
        }

      }
    }

  }
}