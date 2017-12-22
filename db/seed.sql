-- 67C
create table inventory (
    -- 69D
    id serial primary key,
    -- 69C
    name varchar(240),
    -- 69E
    description text,
    address text,
    image varchar(240),
    -- 69F
    loan decimal,
    mortgage decimal,
    -- 69G
    rent float
);

create table address (
    id serial primary key,
    name varchar(240),
    address text,
    city text,
    state text,
    zipCode decimal
);
