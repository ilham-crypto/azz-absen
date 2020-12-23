import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard'
import Customers from './component/Customers';
import Login from './component/Login';
import TambahSiswa from './component/TambahSiswa'
import EditSiswa from './component/EditSiswa'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Switch>
              <Route path='/' exact component={Login}/>
              <Route path='/Dashboard' component={Dashboard}/>
              <Route path='/Customers'component={Customers}/>
              <Route path='/TambahSiswa' component={TambahSiswa}/>
              <Route path='/EditSiswa' component={EditSiswa}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
