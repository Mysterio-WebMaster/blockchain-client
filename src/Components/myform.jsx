import React from 'react'

function myform() {
      return (
            <div>

                  <form action="http://localhost:3001/cryptonex/auth" method="post">
                        <input type="text" name="name" id="" required/>
                        <button type="submit">Verify</button>
                  </form>


            </div>
      )
}

export default myform
