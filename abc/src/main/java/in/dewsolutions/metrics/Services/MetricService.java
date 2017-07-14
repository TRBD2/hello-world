package in.dewsolutions.metrics.Services;

import java.util.List;

import in.dewsolutions.metrics.DTO.MetricsDTO;
import in.dewsolutions.metrics.DTO.ResponseObjectDTO;

public interface MetricService {

	public List<MetricsDTO> getMetrics();
	public ResponseObjectDTO insertUploadMetrics(String FILE_NAME);
		
	

}
