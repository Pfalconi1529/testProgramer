/**
 *
 * todo: Detalles para mostrar
 *
 */

const Details = ({ items, songs }) => {
  return (
    <div className="d-flex pt-2 ">
      <ul className="border text-center pe-4 pt-2 bg-info-subtle ">
        <h5>Rana</h5>
        {items.frog.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <ul className="border text-center pe-4 pt-2 bg-info-subtle">
        <h5>Libélula</h5>
        {items.dragonFly.map((item) => (
          <p key={item}>{item} </p>
        ))}
      </ul>
      <ul className="border text-center pe-4 pt-2 bg-info-subtle">
        <h5>Grillo</h5>
        {items.cricket.map((item) => (
          <p key={item}>{item} </p>
        ))}
      </ul>

      <ul className="border text-center pe-4 pt-2 bg-info-subtle">
        <h5>Canción </h5>
        {songs[0].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <ul className="border text-center pe-4 pt-2 bg-info-subtle">
        <h5>Canción </h5>
        {songs[1].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
      <ul className="border text-center pe-4 pt-2 bg-info-subtle">
        <h5>Canción </h5>
        {songs[2].map((item) => (
          <p key={item}>{item}</p>
        ))}
      </ul>
    </div>
  );
};

export default Details;
