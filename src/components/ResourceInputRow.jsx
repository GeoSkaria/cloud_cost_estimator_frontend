import '../css/Form.css';

function ResourceInputRow({ index, data, onChange, onRemove }) {
  const getSubtypeOptions = () => {
    switch (data.resourceType) {
      case "Compute":
        return ["ECS", "EC2", "Lambda"];
      case "Storage":
        return ["S3", "GCP Storage", "Azure Block"];
      case "Database":
        return ["RDS", "DynamoDB", "Firestore"];
      default:
        return [];
    }
  };

  return (
    <div>
      <select
        name="resourceType"
        value={data.resourceType}
        onChange={(e) => onChange(index, e)}
        className="optionselect"
      >
        <option value="">Select Resource Type</option>
        <option value="Compute">Compute</option>
        <option value="Storage">Storage</option>
        <option value="Database">Database</option>
      </select>

      <select
        name="subType"
        value={data.subType}
        onChange={(e) => onChange(index, e)}
        className="optionselect"
      >
        <option value="">Select Subtype</option>
        {getSubtypeOptions().map((opt, i) => (
          <option key={i} value={opt}>{opt}</option>
        ))}
      </select>

      <input
        type="number"
        min="0"
        name="quantity"
        placeholder="Quantity"
        value={data.quantity}
        onChange={(e) => onChange(index, e)}
      />

      <select
        name="region"
        value={data.region}
        onChange={(e) => onChange(index, e)}
        className="optionselect"
      >
        <option value="">Select Region</option>
        <option value="US-East">US-East</option>
        <option value="Europe-West">Europe-West</option>
        <option value="Asia-South">Asia-South</option>
      </select>

      <button onClick={() => onRemove(index)}>Remove</button>
    </div>
  );
}

export default ResourceInputRow;
