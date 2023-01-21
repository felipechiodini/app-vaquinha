import createVaquinhasTable from './migrations/001_create_vaquinhas_table';

const migrations = [createVaquinhasTable];

export default {
    runMigrations() {
        migrations.forEach((migration) => {
            migration();
        });
    }
}
