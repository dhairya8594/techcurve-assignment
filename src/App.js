import React from 'react'
import './App.css'
import Delete from './delete.png';
const App = () => {
  return (
    <>
    <div className='Button'>
      <button >+</button>
      <div className='hr'/>
      <button><img src={Delete}/></button>
      
    </div>
    <div className='package'>
        <from>
        <div className='checkbox'>
        <input type="checkbox"  className='f-1'/>
        <div className='line' />
        </div>

        <div className='package-feilds'>
          <div className='name'>
          <label for="package-name">Package Name</label><br/>
            <input type="text" id="package-name" name="package-name"/><br/>
            <p>The name is how it appears on your site</p>
          </div>
          <div className='descripition'>
          <label for="package-name">Short description</label><br/>
            <input type="text" id="package-des" name="package-des"/><br/>
            <p>0/50</p>
          </div><br/>
          </div>
          <div className='price-2'>
          <div className='price'>
          <label for="package-name">Price</label><br/>
            <input type="text" id="package-price" name="package-des" /><br/>
            <p>The name is how it appears on your site</p>
            </div>
            <div className='price'>
            <label for="currency">Currency</label><br/>
              <select id="currency" name="currency" >
                <option value="USD">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select><br/>
            </div>          
            <div className='price'>
            <label for="package-type">Package Type</label><br/>
               <select id="package-type" name="package-type">
                 <option value="type1">Type 1</option>
                 <option value="type2">Type 2</option>
                 <option value="type3">Type 3</option>
               </select>
               <p>The name is how it appears on your site</p>

               <br/>
            </div>
          </div>
          <div className='pack'>
          <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label class="form-check-label" for="flexSwitchCheckDefault"><input type='text' placeholder='input text'/></label>
          </div>
          <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label class="form-check-label" for="flexSwitchCheckDefault"><input type='text' placeholder='input text'/></label>
          </div>          <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label class="form-check-label" for="flexSwitchCheckDefault"><input type='text' placeholder='input text'/></label>
          </div>          <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label class="form-check-label" for="flexSwitchCheckDefault"><input type='text' placeholder='input text'/></label>
          </div>          <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label class="form-check-label" for="flexSwitchCheckDefault"><input type='text' placeholder='input text'/></label>
          </div>          <div class="form-check form-switch">
           <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
           <label class="form-check-label" for="flexSwitchCheckDefault"><input type='text' placeholder='input text'/></label>
          </div>
          </div>
      
        </from>
        < div className='verify-box' >
        <input type="checkbox"  className='VF'/>
        <label className='Verify'> &nbsp;Verfied by ConQt</label>
        <p>Check when product is verified by ConQt</p>
        </div>

      </div>
    </>
  )
}

export default App
