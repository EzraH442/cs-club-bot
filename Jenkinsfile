void setBuildStatus(String message, String state) {
  step([
      $class: "GitHubCommitStatusSetter",
      reposSource: [$class: "ManuallyEnteredRepositorySource", url: env.GIT_URL],
      contextSource: [$class: "ManuallyEnteredCommitContextSource", context: "ci/jenkins/build-status"],
      errorHandlers: [[$class: "ChangingBuildStatusErrorHandler", result: "UNSTABLE"]],
      statusResultSource: [ $class: "ConditionalStatusResultSource", results: [[$class: "AnyBuildResult", message: message, state: state]] ]
  ]);
}

pipeline {
  agent any
  triggers {
    pollSCM('* * * * *')
  }
  stages {
    stage('checkout') {
      steps {
        git(url: 'https://github.com/ezrah442/cs-club-bot', branch: BRANCH_NAME, credentialsId: 'e0660be1-ad5e-4d51-b873-000c682efbd5')
      }
    }

    stage('build') {
      steps {
        withCredentials(bindings: [
          string(credentialsId: 'TOKEN', variable: 'DISCORD_BOT_TOKEN'), 
          string(credentialsId: 'CLIENT_ID', variable: 'DISCORD_BOT_CLIENT_ID'),
          string(credentialsId: 'CF_ID', variable: 'CODEFORCES_API_ID'),
          string(credentialsId: 'CF_SECRET', variable: 'CODEFORCES_API_SECRET')
        ]) {
          sh '''
          docker build . \
            --build-arg TOKEN=$DISCORD_BOT_TOKEN \
            --build-arg CLIENT_ID=$DISCORD_BOT_CLIENT_ID \
            --build-arg CF_ID=$CODEFORCES_API_ID \
            --build-arg CF_SECRET=$CODEFORCES_API_SECRET \
            -t cs-club-bot:$(git rev-parse --abbrev-ref HEAD | sed \'s/[^a-zA-Z0-9]/-/g\')-$(git log -1 --pretty=%h)
          '''
        }
      }
      post {
        success {
          setBuildStatus("Build succeeded", "SUCCESS");
        }
        failure {
          setBuildStatus("Build failed", "FAILURE");
        }
      }
    }

    stage('deploy') {
      when {
        branch 'main'
      }
      steps {
        withCredentials(bindings: [
          string(credentialsId: 'TOKEN', variable: 'DISCORD_BOT_TOKEN'), 
          string(credentialsId: 'CLIENT_ID', variable: 'DISCORD_BOT_CLIENT_ID'),
          string(credentialsId: 'CF_ID', variable: 'CODEFORCES_API_ID'),
          string(credentialsId: 'CF_SECRET', variable: 'CODEFORCES_API_SECRET')
        ]) {
          sh 'docker stop $(sudo docker ps -a -q  --filter ancestor=cs-club-bot:latest)'
          sh 'docker tag cs-club-bot:main-$(git log -1 --pretty=%h) cs-club-bot:latest'
          sh 'docker run \
            -e TOKEN=$DISCORD_BOT_TOKEN \
            -e CLIENT_ID=$DISCORD_BOT_CLIENT_ID \
            -e CF_ID=$CODEFORCES_API_ID \
            -e CF_SECRET=$CODEFORCES_API_SECRET \
            -d \
            cs-club-bot:latest'
        }
      }
    }
  }
}
