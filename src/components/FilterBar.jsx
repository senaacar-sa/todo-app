function FilterBar({ filter, onFilterChange }) {
  const filters = [
    { value: "all", label: "Tümü" },
    { value: "active", label: "Aktif" },
    { value: "done", label: "Tamamlanan" },
  ];

  return (
    <div className="filters">
      {filters.map((filterone) => (
        <button
          key={filterone.value}
          onClick={() => onFilterChange(filterone.value)}
          className={filter === filterone.value ? "active" : ""}
        >
          {filterone.label}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;
