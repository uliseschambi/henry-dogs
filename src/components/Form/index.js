import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTemperaments, getDogsAll } from "../../redux/actions";
import StyledDatalist from "./StyledDatalist";
import validation from "./validation";
import { URL_BASE } from "../../redux/actions";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 70vh;
  padding: 20px;
  background-color: var(--light-brown);
`;

const FormDogBox = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 550px;
  max-width: 550px;
  padding: 1.2rem 1.2rem 1.2rem 1.2rem;
  border: 1px solid var(--dark-brown);
  box-shadow: 3px 3px var(--medium-brown);
  color: var(--dark-brown);
`;

const Title = styled.h2``;

const SubTitle = styled.h5`
  margin-bottom: 1rem;
`;

const DogsLabel = styled.h4`
  margin: 1rem;
`;

const BottomForm = styled.div`
  text-align: center;
  padding-top: 1.2rem;
`;

const FormField = styled.div`
  margin-top: 0.2em;
  width: 100%;
`;

const FormInfo = styled.div`
  display: flex;
  align-items: end;
`;

const ButtonSubmit = styled.button`
  all: unset;
  height: 40px;
  width: 110px;
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

const StyledInput = styled.input`
  width: 100%;
  padding: 0.3rem;
  font-size: 1rem;
  color: var(--dark-brown);
  border: 1px solid var(--dark-brown);
  ::placeholder {
    color: var(--dark-brown);
  }
  :hover {
    cursor: text;
  }
  :focus {
    border-color: #ffe021;
    outline: 2px solid #ffe021;
  }
`;

const ErrorMsg = styled.div`
  visibility: ${(props) =>
    !props.visibility ? "hidden" : "visible"};
  font-size: 0.7rem;
  color: red;
  margin-bottom: 0.2rem;
`;

export default function Form() {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  const [buttonEnable, setButtonEnable] = useState(true);
  const [formChanged, setFormChanged] = useState(false); //flag para marcar si se modifica el form
  const formDataInitial = {
    minHeight: { value: "", valid: false },
    name: { value: "", valid: false },
    maxHeight: { value: "", valid: false },
    minWeigth: { value: "", valid: false },
    maxWeigth: { value: "", valid: false },
    minLive: { value: "", valid: true },
    maxLive: { value: "", valid: true },
    image: { value: "", valid: true },
    temperaments: { value: [], valid: false },
  };
  const [formData, setFormData] = useState(formDataInitial);

  useEffect(() => {
    if (!temperaments.length) dispatch(getTemperaments());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (formChanged) {
      for (const prop in formData) {
        if (
          formData[prop].hasOwnProperty("error") ||
          formData[prop].valid === false
        ) {
          setButtonEnable(true);
          return;
        }
      }
      setButtonEnable(false);
    }
    // eslint-disable-next-line
  }, [formData]);

  const handleForm = (event) => {
    event.preventDefault();

    const formToSend = {
      name: formData.name.value,
      height: `${formData.minHeight.value} - ${formData.maxHeight.value}`,
      weight: `${formData.minWeigth.value} - ${formData.maxWeigth.value}`,
      life_span: `${formData.minLive.value} - ${formData.maxLive.value} years`,
      image: formData.image.value,
      temperaments: formData.temperaments.value.map((t) => t.name),
    };

    // post de la nueva raza
    fetch(`${URL_BASE}/dog`, {
      method: "POST",
      body: JSON.stringify(formToSend),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        dispatch(getDogsAll()); // actualizo redux
        alert(
          `La raza de perro ${formData.name.value} se agregó con éxito.`
        );
        setFormData(formDataInitial); // reset campos del form
      })
      .catch(() => {
        alert(
          "No pudo cargarse la raza de perro. Intentelo nuevamente por favor."
        );
      });
  };

  return (
    <Section>
      <FormDogBox
        onChange={() => setFormChanged(true)}
        onSubmit={handleForm}>
        <Title>NUEVA RAZA</Title>
        <SubTitle>Rellena todos los campos</SubTitle>
        <FormInfo>
          {/* IMPUT name */}
          <FormField>
            {formData.name.error ? (
              <ErrorMsg visibility="true">
                {formData.name.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="name"
              placeholder="Nombre de la raza"
              value={formData.name.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
        </FormInfo>
        <FormInfo>
          {/* IMPUT minHeight */}
          <FormField>
            {formData.minHeight.error ? (
              <ErrorMsg visibility="true">
                {formData.minHeight.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="minHeight"
              placeholder="Altura mínima en cm"
              value={formData.minHeight.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
          -{/* IMPUT maxHeight */}
          <FormField>
            {formData.maxHeight.error ? (
              <ErrorMsg visibility="true">
                {formData.maxHeight.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="maxHeight"
              placeholder="Altura máxima en cm"
              value={formData.maxHeight.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
        </FormInfo>
        <FormInfo>
          {/* IMPUT minWeigth */}
          <FormField>
            {formData.minWeigth.error ? (
              <ErrorMsg visibility="true">
                {formData.minWeigth.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="minWeigth"
              placeholder="Peso mínimo en kg"
              value={formData.minWeigth.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
          - {/* IMPUT maxWeigth */}
          <FormField>
            {formData.maxWeigth.error ? (
              <ErrorMsg visibility="true">
                {formData.maxWeigth.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="maxWeigth"
              placeholder="Peso máximo en kg"
              value={formData.maxWeigth.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
        </FormInfo>
        <FormInfo>
          {/* IMPUT minLive */}
          <FormField>
            {formData.minLive.error ? (
              <ErrorMsg visibility="true">
                {formData.minLive.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="minLive"
              placeholder="Años de vida mínimo"
              value={formData.minLive.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
          -{/* IMPUT maxLive */}
          <FormField>
            {formData.maxLive.error ? (
              <ErrorMsg visibility="true">
                {formData.maxLive.error}
              </ErrorMsg>
            ) : (
              <ErrorMsg>hidden</ErrorMsg>
            )}
            <StyledInput
              type="text"
              name="maxLive"
              placeholder="Años de vida máximo"
              value={formData.maxLive.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          </FormField>
        </FormInfo>
        {/* IMPUT image */}
        {formData.image.error ? (
          <ErrorMsg visibility="true">
            {formData.image.error}
          </ErrorMsg>
        ) : (
          <ErrorMsg>hidden</ErrorMsg>
        )}
        <FormField>
          {
            <StyledInput
              type="url"
              name="image"
              placeholder="URL de la imagen"
              value={formData.image.value}
              onChange={(e) => validation(e, formData, setFormData)}
            />
          }
        </FormField>
        {/* Datalist temperaments */}
        <DogsLabel>Temperamentos:</DogsLabel>
        {formData.temperaments.error ? (
          <ErrorMsg visibility="true">
            {formData.temperaments.error}
          </ErrorMsg>
        ) : (
          <ErrorMsg>hidden</ErrorMsg>
        )}
        <StyledDatalist
          temperaments={temperaments}
          formData={formData}
          setFormData={setFormData}
        />
        <BottomForm>
          <ButtonSubmit type="submit" disabled={buttonEnable}>
            Agregar
          </ButtonSubmit>
        </BottomForm>
      </FormDogBox>
    </Section>
  );
}
