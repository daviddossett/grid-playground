import { subtract } from '../../icons/icons';
import { TrackMode } from '../app/App';
import '../input-group/InputGroup.css';

interface InputGroupProps {
  name?: string;
  value: number | string;
  mode: string;
  id: string;
  onDeleteColumn: (e: any) => void;
  onUpdateColumn: (e: any) => void;
}

function handleFocus(e: any) {
  e.target.select();
}

export const InputGroup = ({
  name,
  value,
  mode,
  onDeleteColumn,
  onUpdateColumn,
  id,
}: InputGroupProps) => {
  const textInput = (
    <input
      type={'text'}
      name={name}
      value={value}
      onFocus={handleFocus}
      onChange={onUpdateColumn}
      id={id}
    />
  );

  const numberInput = (
    <input
      type={'number'}
      pattern={'[0-9]*'}
      name={name}
      value={value}
      onFocus={handleFocus}
      onChange={onUpdateColumn}
      id={id}
    />
  );

  const disabledNumberInput = (
    <input type={'text'} disabled name={name} value={'-'} id={id} />
  );

  function getInput(mode: any) {
    switch (mode) {
      case TrackMode.minmax:
        return textInput;
      case TrackMode.minContent:
        return disabledNumberInput;
      case TrackMode.maxContent:
        return disabledNumberInput;
      case TrackMode.auto:
        return disabledNumberInput;
      default:
        return numberInput;
    }
  }

  const input = getInput(mode);

  return (
    <div className={'input-group-row'}>
      {input}
      <select id={id} defaultValue={mode} onChange={onUpdateColumn}>
        <option>{TrackMode.fr}</option>
        <option>{TrackMode.px}</option>
        <option>{TrackMode.percent}</option>
        <option>{TrackMode.em}</option>
        <option>{TrackMode.auto}</option>
        <option>{TrackMode.minContent}</option>
        <option>{TrackMode.maxContent}</option>
        <option>{TrackMode.minmax}</option>
      </select>
      <button
        onClick={onDeleteColumn}
        id={id}
        className={'editor-section-add-button'}
      >
        {subtract}
      </button>
    </div>
  );
};
