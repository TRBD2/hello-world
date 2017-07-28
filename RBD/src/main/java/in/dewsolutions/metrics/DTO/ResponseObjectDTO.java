package in.dewsolutions.metrics.DTO;

import java.util.HashMap;

public class ResponseObjectDTO {

	int insertRow;
	int errorCode;
	HashMap<String, StringBuilder> error;

	public int getInsertRow() {
		return insertRow;
	}

	public void setInsertRow(int insertRow) {
		this.insertRow = insertRow;
	}

	public int getErrorCode() {
		return errorCode;
	}

	public void setErrorCode(int errorCode) {
		this.errorCode = errorCode;
	}

	public HashMap<String, StringBuilder> getError() {
		return error;
	}

	public void setError(HashMap<String, StringBuilder> error) {
		this.error = error;
	}

}
