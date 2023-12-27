

function App() {
  return (
    <main >
      <header><a href="/">admin.bike-booking.com</a></header>
      <div style={{ display: 'flex', gap: 150}}>
        <ul>
          <li>1 bick</li>
          <li>1 bick</li>
          <li>1 bick</li>
          <li>1 bick</li>
          <li>1 bick</li>
        </ul>
        <span></span>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', width: 700}}>
            <form action="">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="type" />
            <input type="text" placeholder="color" />
            <input type="text" placeholder="wheel size" />
            <input type="text" placeholder="price" />
            <input type="text" placeholder="id" />
            
            <textarea name="discr" id="" cols="30" rows="10"></textarea>
            <button>save</button>
            <button>clear</button>
          </form>
          </div>

          <div>
            <h3>Statistics</h3>
            <p>Totla bikes:</p>
            <p>Availeble bikes:</p>
            <p>Booked bikes:</p>
            <p>Average bike cost:</p>
            
         </div>
        </div>
      </div>
    </main>
  );
}

export default App;
