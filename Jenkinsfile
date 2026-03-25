pipeline {
    agent {
        docker {
            image 'node:18-alpine'
        }
    }

    parameters {
        string(name: 'QASE_PROJECT_CODE')
        string(name: 'QASE_RUN_ID')
        string(name: 'QASE_REPORT')
        string(name: 'QASE_RUN_COMPLETE')
        string(name: 'QASE_API_BASE_URL')
    }

    environment {
        QASE_TESTOPS_API_TOKEN = credentials('QASE_API_TOKEN')
    }

    stages {
        stage('Setup Environment Variables') {
            steps {
                script {
                    env.QASE_TESTOPS_PROJECT = params.QASE_PROJECT_CODE
                    env.QASE_TESTOPS_RUN_ID = params.QASE_RUN_ID
                    env.QASE_TESTOPS_RUN_COMPLETE = params.QASE_RUN_COMPLETE
                }
            }
        }

        stage('Run tests') {
            steps {
                git url: 'https://github.com/Karan710/qase-playwright-ci-cd-demo.git', branch: 'main'
                sh 'npm install'
                sh 'npx playwright test'
            }
        }
    }
}
