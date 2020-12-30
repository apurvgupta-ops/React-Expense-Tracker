import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from './Contaxt/Contaxt'
import './index.css'
import {SpeechProvider} from '@speechly/react-client'


ReactDOM.render(<>
<SpeechProvider appId = '5afd89f5-ab6f-4946-a352-2e2c7efc73c0' language = 'en-US'>
<Provider>
<App />
</Provider>
</SpeechProvider>
</>
,document.getElementById('root'))