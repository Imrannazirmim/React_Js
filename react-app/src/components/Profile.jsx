/* eslint-disable react/prop-types */


const Profile = () => {
    return (
      <div>
        <h1>Profile Card chanllenge</h1>
        <ProfileCard
          name="Alixe"
          age={30}
          greeting={
            <div>
              <strong>Hi Alixe, have a wonderful day</strong>
            </div>
          }
        >
          <p>Hobbies: Reading, programming</p>
          <button>Contact</button>
        </ProfileCard>

        <ProfileCard
          name="Bob"
          age={20}
          greeting={
            <div>
              <strong>Hi Bob, have a wonderful day</strong>
            </div>
          }
        >
          <p>Hobbies: Reading, Hancking</p>
          <button>Contact</button>
        </ProfileCard>
      </div>
    );
}

export {Profile}

function ProfileCard(props) {
    const {name, age, greeting, children} = props;
    return(
        <>
            <h2>Name:{name}</h2>
            <p>Age: {age}</p>
            <p>{greeting}</p>
            <div>{children}</div>
        </>
    )
}