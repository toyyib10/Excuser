import '../node_modules/bootstrap/dist/css/bootstrap.css';

const App = () => {
  const myStyle = {
    height: "500px",
    backgroundColor : "rgb(16, 16, 65)",
    borderRadius : "10px"
  }
  return (
    <section className="w-100 mt-5">
      <center>
        <section style={myStyle} className="w-75 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis pariatur perspiciatis eligendi temporibus sunt voluptatibus labore amet, non quas animi natus error maiores saepe voluptatem nobis! Natus libero velit delectus.
        </section>
      </center>
    </section>
  )
}

export default App;

