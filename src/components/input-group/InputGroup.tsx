import { useState } from 'react';
import { subtract } from '../../icons/icons';
import { TrackMode } from '../../templates/grid';
import '../input-group/InputGroup.css';

interface InputGroupProps {
	name?: string;
	value: number;
	mode: string;
	id: string;
	onDelete: (e: any) => void;
	onUpdateColumnWidth: (e: any) => void;
	onUpdateColumnMode: (e: any) => void;
}

function handleFocus(e: any) {
	e.target.select();
}

export const InputGroup = ({
	name,
	value,
	mode,
	onDelete,
	onUpdateColumnWidth,
	onUpdateColumnMode,
	id,
}: InputGroupProps) => {
	const getTrackModeDropdown = () => {
		return (
			<select id={id} defaultValue={mode} onChange={onUpdateColumnMode}>
				<option>{TrackMode.fr}</option>
				<option>{TrackMode.px}</option>
				<option>{TrackMode.percent}</option>
				<option>{TrackMode.em}</option>
				<option>{TrackMode.auto}</option>
				<option>{TrackMode.minContent}</option>
				<option>{TrackMode.maxContent}</option>
				<option>{TrackMode.minmax}</option>
			</select>
		);
	};

	const trackModeDropdown = getTrackModeDropdown();

	return (
		<div className={'input-group-row'}>
			<input
				type={'number'}
				pattern={'[0-9]*'}
				name={name}
				value={value}
				onFocus={handleFocus}
				onChange={onUpdateColumnWidth}
				id={id}
			/>
			{trackModeDropdown}
			<button
				onClick={onDelete}
				id={id}
				className={'editor-section-add-button'}
			>
				{subtract}
			</button>
		</div>
	);
};
