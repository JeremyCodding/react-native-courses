import PlaceForm from "../components/Places/PlaceForm";

function AddPlace({ navigation }) {
  function createrPlaceHandler(place) {
    navigation.navigate("AllPlaces", {
      place: place,
    });
  }

  return <PlaceForm onCreatePlace={createrPlaceHandler} />;
}

export default AddPlace;
