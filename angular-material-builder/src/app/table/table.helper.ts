export interface TableType {
    columns: {header: string, cell: string}[];
    options: { label: 'hasSort' | 'hasPaginator' | 'hasFilter', value: boolean }[];
}
// tslint:disable-next-line:variable-name
const _window = window as unknown as any;
const PRETTIER: (code: string, mode?: string) => string = _window.prettier;

function getOptionValue(opts: TableType['options'], opt: TableType['options'][0]['label'] ): boolean {

    const _ = opts.find(e => e.label === opt);

    return _ ? _.value : false;
}

function makeColumnDef( column: TableType['columns'][0], hasSort: boolean): string {
    return `<ng-container matColumnDef="${column.cell}">
                <th mat-header-cell *matHeaderCellDef${hasSort ? ' mat-sort-header' : ''}> ${column.header} </th>
                <td mat-cell *matCellDef="let row"> {{row.${column.cell}}} </td>
            </ng-container>`;
}

export const buildTableHtml = (obj: TableType): string => {
    let ans = '';

    const hasSort = getOptionValue(obj.options, 'hasSort');
    const hasPaginator = getOptionValue(obj.options, 'hasPaginator');
    const hasFilter = getOptionValue(obj.options, 'hasFilter');

    if (hasFilter) { ans = ans + `<mat-form-field style="display: block;">
        <mat-label>Filter</mat-label>
        <mat-icon matSuffix>search</mat-icon>
        <input matInput (keyup)="applyFilter($event)" #searchFilter>
    </mat-form-field>`; }

    if (hasPaginator) { ans = ans + '<div>'; }

    ans = ans + `<table mat-table [dataSource]="dataSource"${hasSort ? ' matSort' : ''}>`;

    ans = ans + obj.columns.map( e => makeColumnDef(e, hasSort)).join('\n');

    ans = ans + `<tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

    <tr class="mat-row" *matNoDataRow>
      <td class="mat-cell" colspan="${obj.columns.length}">No data ${hasFilter ? 'matching the filter "{{searchFilter.value}}"' : 'to display'}</td>
    </tr>

    `;

    ans = ans + '</table>';

    if (hasPaginator) { ans = ans + '<mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator></div>'; }

    ans = PRETTIER(ans, 'angular');

    return ans;
};
export const buildTableTs   = (obj: TableType): string => {
    let ans = `displayedColumns: string[] = ${JSON.stringify(obj.columns.map(e => e.cell))};\ndataSource: MatTableDataSource<YouShouldUseTypes>;`;

    const hasSort = getOptionValue(obj.options, 'hasSort');
    const hasPaginator = getOptionValue(obj.options, 'hasPaginator');
    const hasFilter = getOptionValue(obj.options, 'hasFilter');

    if (hasPaginator || hasSort) {

    ans = ans + '\n';

    if (hasPaginator) { ans = ans + '\n@ViewChild(MatPaginator) paginator: MatPaginator;'; }

    if (hasSort) { ans = ans + '\n@ViewChild(MatSort) sort: MatSort;'; }
    }
    ans = ans + `\n\n// add this whereever you retrieve the data. Should go into constructor or any other function\nthis.dataSource = new MatTableDataSource(addYourData);`;

    if (hasPaginator || hasSort) {
        ans = ans + `\n\nngAfterViewInit() { ${hasPaginator ? '\n  this.dataSource.paginator = this.paginator;' : ''}${hasSort ? '\n  this.dataSource.sort = this.sort;' : ''}
}`;

    }

    if (hasFilter) { ans = ans + `\n\napplyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}`; }

    // ans = PRETTIER(ans, 'typescript');

    return ans;

 };
