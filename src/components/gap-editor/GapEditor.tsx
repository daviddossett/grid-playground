import React from 'react';
import { columnGap, rowGap } from '../../icons/icons';
import { IGridState } from '../app/App';
import { EditorSection } from '../editor-section/EditorSection';
import { TextInput } from '../text-input/TextInput';
import '../gap-editor/GapEditor.css';

interface GapEditorProps {
  onGapChange: (e: any) => void;
  gridState: IGridState;
}

export const GapManager = ({ onGapChange, gridState }: GapEditorProps) => {
  return (
    <EditorSection>
      <h2>Gap</h2>
      <div className={'input-row'}>
        <TextInputTitle
          label={'Column'}
          name={'columnGap'}
          type={'number'}
          icon={columnGap}
          onChange={onGapChange}
          value={gridState.columnGap}
        />
        <TextInput
          label={'Row'}
          name={'rowGap'}
          type={'number'}
          icon={rowGap}
          onChange={onGapChange}
          value={gridState.rowGap}
        />
      </div>
    </EditorSection>
  );
};
