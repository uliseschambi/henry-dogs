import { useRef } from 'react';
import styled from 'styled-components';

const MultiSelectBox = styled.div``;
const StyledInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  font-size: 1rem;
  color: var(--dark-brown);
  border: 1px solid var(--dark-brown);
  ::placeholder {
    color: var(--medium-brown);
  }
  :hover {
    cursor: text;
  }
  :focus {
    border: 2px solid var(--dark-brown);
  }
`;

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  color: white;
  background-color: var(--dark-brown);
  &[disabled] {
    pointer-events: none;
    cursor: default;
    background-color: lightgrey;
  }
  &:active {
    cursor: pointer;
    background-color: #ffe021;
    box-shadow: 0 0 10px #ffe021, 0 0 40px;
  }
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomRow = styled.div`
  margin-top: 0.7rem;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const LeftColumn = styled.div`
  width: 84%;
`;

const RightColumn = styled.div`
  width: 16%;
  text-align: right;
`;

const ButtonAdd = styled(StyledButton)`
  padding: 0.3rem 0.9rem;
`;

export default function StyledDatalist({ formData, setFormData, temperaments }) {
  const dataListRef = useRef(null);

  const onAddClick = event => {
    event.preventDefault();

    if (formData.temperaments.hasOwnProperty('error')) return;

    const currentArray = formData.temperaments.value;
    const currentName = dataListRef.current.value;

    // si esta vacio no hace nada
    if (currentName.length === 0) return;

    // si el nombre perro actual ya está en el array actual no hace nada
    if (currentArray.some(temperament => temperament.name === currentName)) return;

    // si quiero agregar un termperamento que no existe no hace nada
    const currentTemperament = temperaments.find(c => c.name === currentName);
    if (currentTemperament === undefined) return;

    setFormData({
      ...formData,
      temperaments: {
        value: [
          ...currentArray,
          {
            id: currentTemperament.id,
            name: currentTemperament.name,
          },
        ],
        valid: true,
      },
    });

    dataListRef.current.value = ''; //reset input
  };

  const onKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onAddClick(event);
      return;
    }
  };

  return (
    <MultiSelectBox>
      <TopRow>
        <LeftColumn>
          <StyledInput name="dogInput" list="temperamentsList" ref={dataListRef} onKeyDown={e => onKeyDown(e)} />
          <datalist id="temperamentsList">
            {temperaments.map(temperament => (
              <option key={temperament.id} value={temperament.name} />
            ))}
          </datalist>
        </LeftColumn>
        <RightColumn>
          <ButtonAdd type="button" onClick={onAddClick}>
            +
          </ButtonAdd>
        </RightColumn>
      </TopRow>
      <BottomRow>
        {formData.temperaments.value.map(temperament => (
          <Temperament temperament={temperament} key={temperament.id} formData={formData} setFormData={setFormData} />
        ))}
      </BottomRow>
    </MultiSelectBox>
  );
}

// COMIENZO DEL MINI-COMPONENTE Temperamento

const BoxTemperament = styled.div`
  background-color: white;
  color: var(--dark-brown);
  display: inline-block;
  padding: 0.3rem;
  margin: 0.2rem;
`;

const DeleteButton = styled(StyledButton)`
  background-color: var(--dark-brown);
  padding: 0.1rem;
  margin-left: 0.3rem;
`;

function Temperament({ temperament, formData, setFormData }) {
  const onDeleteTemperament = temperamentId => {
    setFormData({
      ...formData,
      temperaments: {
        value: formData.temperaments.value.filter(t => t.id !== temperamentId),
        valid: formData.temperaments.value.length === 0,
      },
    });
  };

  return (
    <BoxTemperament>
      {temperament.name}
      <DeleteButton onClick={() => onDeleteTemperament(temperament.id)}>X</DeleteButton>
    </BoxTemperament>
  );
}
