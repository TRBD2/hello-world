
package in.dewsolutions.metrics.DTO;

import java.util.List;

public class MetricsDTO {
	private Integer id;
	private Integer metricsTypeId;
	private Integer fieldTypeId;
	private String uom;
	private Integer numberTypeId;
	private String metricName;
	private List<String> listValue;
	private String listvalues;
	private String type;
	private String fieldType;
	private String numberType;
	private Integer numberRange;
	private Integer characterLimit;

	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getFieldType() {
		return fieldType;
	}

	public void setFieldType(String fieldType) {
		this.fieldType = fieldType;
	}

	public String getNumberType() {
		return numberType;
	}

	public void setNumberType(String numberType) {
		this.numberType = numberType;
	}

	public String getListvalues() {
		return listvalues;
	}

	public void setListvalues(String listvalues) {
		this.listvalues = listvalues;
	}

	public List<String> getListValue() {
		return listValue;
	}

	public void setListValue(List<String> listValue) {
		this.listValue = listValue;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getMetricsTypeId() {
		return metricsTypeId;
	}

	public void setMetricsTypeId(Integer metricsTypeId) {
		this.metricsTypeId = metricsTypeId;
	}

	public Integer getFieldTypeId() {
		return fieldTypeId;
	}

	public void setFieldTypeId(Integer fieldTypeId) {
		this.fieldTypeId = fieldTypeId;
	}

	public String getUom() {
		return uom;
	}

	public void setUom(String uom) {
		this.uom = uom;
	}

	public Integer getNumberTypeId() {
		return numberTypeId;
	}

	public void setNumberTypeId(Integer numberTypeId) {
		this.numberTypeId = numberTypeId;
	}

	public String getMetricName() {
		return metricName;
	}

	public void setMetricName(String metricName) {
		this.metricName = metricName;
	}

	public Integer getNumberRange() {
		return numberRange;
	}

	public void setNumberRange(Integer numberRange) {
		this.numberRange = numberRange;
	}

	public Integer getCharacterLimit() {
		return characterLimit;
	}

	public void setCharacterLimit(Integer characterLimit) {
		this.characterLimit = characterLimit;
	}

	public String toString() {
		return "metricName" + metricName + "metricsTypeId" + metricsTypeId + "fieldTypeId" + fieldTypeId + "uom" + uom
				+ "numberTypeId" + numberTypeId + "metricName" + metricName + "numberRange" + numberRange
				+ "characterLimit" + characterLimit;
	}

}
