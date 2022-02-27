-- CreateEnum
CREATE TYPE "HeardFrom" AS ENUM ('SEARCH', 'RANDSTAND_STAFF', 'ADVERTISEMENT', 'FRIENDS');

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locations" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_applications" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "no_of_year_exp" INTEGER NOT NULL,
    "notice_period" INTEGER NOT NULL,
    "contact_no" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "heardFrom" "HeardFrom" NOT NULL,
    "location_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_applications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_applications" ADD CONSTRAINT "job_applications_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO "jobs" 
VALUES ('1', 'Software Developer', now(), now()),
('2', 'Senior Recruitment Consultant', now(), now()),
('3', 'HR Manager', now(), now()),
('4', 'Sales Consultant', now(), now());

INSERT INTO "locations" 
VALUES ('1', 'Kuala Lumpur, Malaysia', now(), now()),
('2', 'Cyberjaya, Malaysia', now(), now()),
('3', 'Singapore', now(), now()),
('4', 'Melbourne, Australia', now(), now());