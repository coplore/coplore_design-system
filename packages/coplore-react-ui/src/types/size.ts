export type NumericSize =
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
	| '10'
	| '12'
	| '14'
	| '16'
	| '20'
	| '24'
	| '28'
	| '32'
	| '36'
	| '40'
	| '44'
	| '48'
	| '52'
	| '56'
	| '60'
	| '64'
	| '72'
	| '80'
	| '96';

export type ThemeSize =
	| 'xs' //
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl';

export type SpecialSize =
	| 'full' //
	| 'max'
	| 'min';

export type ThemeOrSpecialSize =
	| ThemeSize //
	| SpecialSize;

export type CoploreSize =
	| NumericSize //
	| ThemeOrSpecialSize;
