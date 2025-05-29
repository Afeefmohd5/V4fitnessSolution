import React, { useState } from 'react'
import './ConfigureBroker.css'

function ConfigureBroker() {
  const [brokerConfig, setBrokerConfig] = useState({
    brokerName: '',
    apiKey: '',
    apiSecret: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBrokerConfig((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    alert('Broker configuration saved: ' + JSON.stringify(brokerConfig, null, 2))
  }

  return (
    <div className="configure-broker container my-5">
      <div className="card shadow p-4 rounded">
        <h3 className="mb-4">Configure Broker Account</h3>
        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label htmlFor="brokerName" className="form-label">Broker Name</label>
            <input
              type="text"
              id="brokerName"
              name="brokerName"
              className="form-control"
              value={brokerConfig.brokerName}
              onChange={handleChange}
              placeholder="Enter your broker name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apiKey" className="form-label">API Key</label>
            <input
              type="text"
              id="apiKey"
              name="apiKey"
              className="form-control"
              value={brokerConfig.apiKey}
              onChange={handleChange}
              placeholder="Enter your API key"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="apiSecret" className="form-label">API Secret</label>
            <input
              type="password"
              id="apiSecret"
              name="apiSecret"
              className="form-control"
              value={brokerConfig.apiSecret}
              onChange={handleChange}
              placeholder="Enter your API secret"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Save Configuration</button>
        </form>
      </div>
    </div>
  )
}

export default ConfigureBroker
