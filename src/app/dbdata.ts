
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Tabledata } from './tabledata';
export class Dbdata implements InMemoryDbService {
    createDb() {
        const table1data: Tabledata[] = [{ year: "2012", month: "January", price: "400" },
        { year: "2013", month: "February", price: "900" },
        { year: "2014", month: "March", price: "800" },
        { year: "2014", month: "May", price: "920" }
        ];
        const table2data: Tabledata[] = [{ year: "2012",month:"December",price:"390"},
        { year: "2012",month:"January",price:"400"},
        { year: "2013",month:"February",price:"600"},
        { year: "2015",month:"April",price:"700"}
                    ];

        return { table1data, table2data };

    }
}
