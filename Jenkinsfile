pipeline {
    agent {
        kubernetes {
            yaml '''
spec:
  containers:
    - name: node
      image: node:16.14.2-alpine3.15
      command:
        - sleep
      args:
        - 99d
'''
        }
    }
    
    parameters {
        string(name: 'QASE_PROJECT_CODE')
        string(name: 'QASE_RUN_ID')
        string(name: 'QASE_REPORT')
        string(name: 'QASE_RUN_COMPLETE')
        string(name: 'QASE_API_BASE_URL')
        credentials(name: 'QASE_API_TOKEN', credentialType: "Secret text")
    }
    
    environment {
        QASE_TESTOPS_API_TOKEN = credentials("${params.QASE_API_TOKEN}")
    }
    
    stages {
        stage('Setup Environment Variables') {
            steps {
                script {
                    // Map existing variables to new ones
                    env.QASE_TESTOPS_PROJECT = params.QASE_PROJECT_CODE
                    env.QASE_TESTOPS_RUN_ID = params.QASE_RUN_ID
                    env.QASE_TESTOPS_RUN_COMPLETE = params.QASE_RUN_COMPLETE
                }
            }
        }
        
        stage('Run tests') {
            steps {
                git url: 'https://github.com/Karan710/qase-playwright-ci-cd-demo.git', branch: 'main'
                container('node') {
                    sh 'npm i'
                    sh 'npm test'
                }
            }
        }
    }
}
