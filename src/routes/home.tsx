export function HomeRoute() {
  return (
    <>
      <Photo />
      <Rackets />
    </>
  );
}

function Photo() {
  return (
    <div className="mt-20 flex justify-center">
      <img
        className="object-cover"
        src="https://strapiproduction-16636.kxcdn.com/uploads/Blade_S_Banner_8f8b3f28e8/Blade_S_Banner_8f8b3f28e8.jpg?width=1920&quality=89"
        alt="Banner Home"
      />
    </div>
  );
}

function Rackets() {
  return (
    <div className="mt-20">
      <h1>Rackets</h1>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <img
            src="https://strapiproduction-16636.kxcdn.com/uploads/Template_01_31d3c59d55/Template_01_31d3c59d55.jpg?width=1080&quality=83"
            alt="Ignite 9"
          />
          <h4>
            <p>Ignite 9</p>
          </h4>
        </div>

        <div>
          <img
            src="https://strapiproduction-16636.kxcdn.com/uploads/Template_01_37966329be/Template_01_37966329be.jpg?width=1080&quality=83"
            alt="Ignite 8"
          />
          <h4>
            <p>Ignite 8</p>
          </h4>
        </div>
        <div>
          <img
            src="https://strapiproduction-16636.kxcdn.com/uploads/1_844c494adf/1_844c494adf.jpg?width=1080&quality=83"
            alt="Axforce 40-4U"
          />{" "}
          <h4>
            <p>Axforce 40-4U</p>
          </h4>
        </div>
        <div>
          <img
            src="https://strapiproduction-16636.kxcdn.com/uploads/1_66486a3b0b/1_66486a3b0b.jpg?width=1080&quality=83"
            alt="Axforce 70-4U"
          />{" "}
          <h4>
            <p>Axforce 70-4U</p>
          </h4>
        </div>
      </div>
    </div>
  );
}
