import { TCep } from "../../types";
import { Text } from 'react-native';
import { LocationContainer, LocationInfo } from "./style";

type propsCep = {
  data: TCep;
};


function Location(props: propsCep) {
  return (
    <LocationContainer>
      <LocationInfo>
        {props.data.logradouro}, {props.data.bairro} - {props.data.localidade}-{props.data.uf}
      </LocationInfo>
    </LocationContainer>
  );
}

export default Location;