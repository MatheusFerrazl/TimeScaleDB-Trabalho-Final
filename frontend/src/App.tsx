import { useEffect, useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'

import type { DataCenter } from './types/DataCenter'


function App() {

  const [dataCenters, setDataCenters] = useState<DataCenter[]>([])

  

  useEffect(() => {

  }, [])

  return (
    <>
      <Header/>
      <Table rows={dataCenters}></Table>
    </>
  )
}

export default App
