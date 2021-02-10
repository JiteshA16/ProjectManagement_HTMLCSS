package apps.proman.api.model;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.UUID;
import org.springframework.validation.annotation.Validated;
import javax.validation.Valid;
import javax.validation.constraints.*;

/**
 * CreateBoardRequest
 */
@Validated
@javax.annotation.Generated(value = "io.swagger.codegen.languages.SpringCodegen", date = "2021-02-08T11:40:54.617+05:30")

public class CreateBoardRequest   {
  @JsonProperty("name")
  private String name = null;

  @JsonProperty("owner_id")
  private UUID ownerId = null;

  @JsonProperty("description")
  private String description = null;

  public CreateBoardRequest name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Name of the new board
   * @return name
  **/
  @ApiModelProperty(required = true, value = "Name of the new board")
  @NotNull


  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public CreateBoardRequest ownerId(UUID ownerId) {
    this.ownerId = ownerId;
    return this;
  }

  /**
   * Owner (user identifier) of the board
   * @return ownerId
  **/
  @ApiModelProperty(required = true, value = "Owner (user identifier) of the board")
  @NotNull

  @Valid

  public UUID getOwnerId() {
    return ownerId;
  }

  public void setOwnerId(UUID ownerId) {
    this.ownerId = ownerId;
  }

  public CreateBoardRequest description(String description) {
    this.description = description;
    return this;
  }

  /**
   * Description of the board
   * @return description
  **/
  @ApiModelProperty(value = "Description of the board")


  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateBoardRequest createBoardRequest = (CreateBoardRequest) o;
    return Objects.equals(this.name, createBoardRequest.name) &&
        Objects.equals(this.ownerId, createBoardRequest.ownerId) &&
        Objects.equals(this.description, createBoardRequest.description);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, ownerId, description);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateBoardRequest {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    ownerId: ").append(toIndentedString(ownerId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

